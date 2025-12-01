const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Initialize Firebase Admin
admin.initializeApp();
const db = admin.firestore();

/**
 * Get the start and end timestamps for today in IST
 */
const getTodayISTBounds = () => {
  const now = new Date();
  
  // Convert to IST (UTC+5:30)
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istNow = new Date(now.getTime() + istOffset);
  
  // Get start of day (12:00 AM IST)
  const startOfDay = new Date(istNow);
  startOfDay.setUTCHours(0, 0, 0, 0);
  
  // Get end of day (11:59:59 PM IST)
  const endOfDay = new Date(istNow);
  endOfDay.setUTCHours(23, 59, 59, 999);
  
  return {
    start: startOfDay,
    end: endOfDay,
    now: istNow
  };
};

/**
 * Scheduled function to rotate puzzle daily at midnight IST
 * Runs at 00:00 IST (18:30 UTC previous day)
 */
exports.rotateDailyPuzzle = functions.pubsub
  .schedule('30 18 * * *') // 18:30 UTC = 00:00 IST (midnight)
  .timeZone('Asia/Kolkata')
  .onRun(async (context) => {
    console.log('Starting daily puzzle rotation at midnight IST...');
    
    try {
      const displayDocRef = db.collection('displayPuzzle').doc('current');
      const displayDoc = await displayDocRef.get();
      
      // Step 1: Move current display puzzle to history (if exists)
      if (displayDoc.exists) {
        const currentPuzzle = displayDoc.data();
        console.log('Moving current puzzle to history:', currentPuzzle.movieName);
        
        await db.collection('historyPuzzles').add({
          ...currentPuzzle,
          movedToHistoryAt: admin.firestore.FieldValue.serverTimestamp()
        });
        
        console.log('Current puzzle moved to history');
      } else {
        console.log('No current display puzzle found');
      }
      
      // Step 2: Get the oldest approved puzzle (FIFO)
      const approvedQuery = db.collection('approvedPuzzles')
        .orderBy('createdAt', 'asc')
        .limit(1);
      
      const approvedSnapshot = await approvedQuery.get();
      
      if (approvedSnapshot.empty) {
        console.log('No approved puzzles available for rotation');
        return null;
      }
      
      const nextPuzzleDoc = approvedSnapshot.docs[0];
      const nextPuzzle = nextPuzzleDoc.data();
      
      console.log('Next puzzle selected:', nextPuzzle.movieName);
      
      // Step 3: Set as display puzzle with today's expiry
      const { end } = getTodayISTBounds();
      
      await displayDocRef.set({
        movieName: nextPuzzle.movieName,
        submittedBy: nextPuzzle.submittedBy,
        clues: nextPuzzle.clues,
        createdAt: nextPuzzle.createdAt,
        approvedAt: nextPuzzle.approvedAt,
        displayedAt: admin.firestore.FieldValue.serverTimestamp(),
        expiryDate: admin.firestore.Timestamp.fromDate(end),
        sourceId: nextPuzzleDoc.id
      });
      
      console.log('New puzzle set as display with expiry:', end);
      
      // Step 4: Delete from approved puzzles
      await nextPuzzleDoc.ref.delete();
      console.log('Puzzle removed from approved collection');
      
      console.log('✅ Daily puzzle rotation completed successfully!');
      return null;
      
    } catch (error) {
      console.error('❌ Error in daily puzzle rotation:', error);
      throw error;
    }
  });

/**
 * Backup function: Check and rotate if needed (runs every hour)
 * This ensures rotation happens even if the midnight function fails
 */
exports.checkAndRotatePuzzle = functions.pubsub
  .schedule('0 * * * *') // Every hour
  .timeZone('Asia/Kolkata')
  .onRun(async (context) => {
    console.log('Checking if puzzle rotation is needed...');
    
    try {
      const displayDocRef = db.collection('displayPuzzle').doc('current');
      const displayDoc = await displayDocRef.get();
      
      if (!displayDoc.exists) {
        console.log('No display puzzle found, triggering rotation...');
        // Trigger rotation by calling the main function logic
        return rotatePuzzleLogic();
      }
      
      const puzzleData = displayDoc.data();
      const expiryDate = puzzleData.expiryDate?.toDate();
      const now = new Date();
      
      if (!expiryDate || now > expiryDate) {
        console.log('Display puzzle has expired, triggering rotation...');
        return rotatePuzzleLogic();
      }
      
      console.log('Current puzzle is still valid, no rotation needed');
      return null;
      
    } catch (error) {
      console.error('Error checking puzzle expiry:', error);
      throw error;
    }
  });

/**
 * Trigger: When a new puzzle is approved, check if we need to display it immediately
 * This ensures displayPuzzle is never empty if there are approved puzzles
 */
exports.onPuzzleApproved = functions.firestore
  .document('approvedPuzzles/{puzzleId}')
  .onCreate(async (snap, context) => {
    console.log('New puzzle approved, checking if display is empty...');
    try {
      const displayDocRef = db.collection('displayPuzzle').doc('current');
      const displayDoc = await displayDocRef.get();

      let shouldRotate = false;

      if (!displayDoc.exists) {
        console.log('Display puzzle is empty. Promoting new puzzle immediately.');
        shouldRotate = true;
      } else {
        const puzzleData = displayDoc.data();
        const expiryDate = puzzleData.expiryDate?.toDate();
        const now = new Date();

        if (!expiryDate || now > expiryDate) {
          console.log('Current display puzzle is expired. Promoting new puzzle.');
          shouldRotate = true;
        }
      }

      if (shouldRotate) {
        await rotatePuzzleLogic();
      }
    } catch (error) {
      console.error('Error in onPuzzleApproved trigger:', error);
    }
  });

/**
 * Helper function containing the rotation logic
 */
async function rotatePuzzleLogic() {
  const displayDocRef = db.collection('displayPuzzle').doc('current');
  const displayDoc = await displayDocRef.get();
  
  // Move current to history if exists
  if (displayDoc.exists) {
    const currentPuzzle = displayDoc.data();
    await db.collection('historyPuzzles').add({
      ...currentPuzzle,
      movedToHistoryAt: admin.firestore.FieldValue.serverTimestamp()
    });
  }
  
  // Get next approved puzzle
  const approvedQuery = db.collection('approvedPuzzles')
    .orderBy('createdAt', 'asc')
    .limit(1);
  
  const approvedSnapshot = await approvedQuery.get();
  
  if (approvedSnapshot.empty) {
    console.log('No approved puzzles available');
    return null;
  }
  
  const nextPuzzleDoc = approvedSnapshot.docs[0];
  const nextPuzzle = nextPuzzleDoc.data();
  
  // Set as display puzzle
  const { end } = getTodayISTBounds();
  
  await displayDocRef.set({
    movieName: nextPuzzle.movieName,
    submittedBy: nextPuzzle.submittedBy,
    clues: nextPuzzle.clues,
    createdAt: nextPuzzle.createdAt,
    approvedAt: nextPuzzle.approvedAt,
    displayedAt: admin.firestore.FieldValue.serverTimestamp(),
    expiryDate: admin.firestore.Timestamp.fromDate(end),
    sourceId: nextPuzzleDoc.id
  });
  
  // Delete from approved
  await nextPuzzleDoc.ref.delete();
  
  console.log('Rotation completed successfully');
  return null;
}

/**
 * HTTP function for manual rotation (callable from admin panel)
 */
exports.manualRotatePuzzle = functions.https.onCall(async (data, context) => {
  // Verify admin authentication
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      'Must be authenticated to rotate puzzles'
    );
  }
  
  console.log('Manual rotation triggered by:', context.auth.uid);
  
  try {
    await rotatePuzzleLogic();
    return { success: true, message: 'Puzzle rotated successfully' };
  } catch (error) {
    console.error('Error in manual rotation:', error);
    throw new functions.https.HttpsError('internal', error.message);
  }
});
