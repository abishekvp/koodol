# Puzzle Rotation System - Implementation Guide

## Overview

The puzzle rotation system automatically manages daily puzzles with the following flow:
**Submitted → Waiting → Approved → Display → History**

## Collections Structure

### 1. **waitingPuzzles** (Pending Review)

- Puzzles submitted by users
- Awaiting admin approval
- Fields:
  - `movieName`: string
  - `submittedBy`: string
  - `clues`: array of strings
  - `createdAt`: timestamp

### 2. **approvedPuzzles** (Ready for Display)

- Puzzles approved by admin
- Waiting to be displayed
- Uses FIFO (First In, First Out) - oldest approved puzzle is displayed first
- Fields:
  - `movieName`: string
  - `submittedBy`: string
  - `clues`: array of strings
  - `createdAt`: timestamp
  - `approvedAt`: timestamp

### 3. **displayPuzzle** (Single Document: 'current')

- Currently active puzzle shown to users
- Only ONE puzzle at a time
- Auto-expires at 11:59:59 PM IST daily
- Fields:
  - `movieName`: string
  - `submittedBy`: string
  - `clues`: array of strings
  - `createdAt`: timestamp
  - `approvedAt`: timestamp
  - `displayedAt`: timestamp
  - `expiryDate`: timestamp (11:59:59 PM IST)
  - `sourceId`: string (reference to original approved puzzle)

### 4. **rejectedPuzzles** (Rejected)

- Puzzles rejected by admin
- Kept for record
- Fields:
  - `movieName`: string
  - `submittedBy`: string
  - `clues`: array of strings
  - `createdAt`: timestamp
  - `rejectedAt`: timestamp

### 5. **historyPuzzles** (Expired/Past)

- Puzzles that have been displayed and expired
- Archive of all past daily puzzles
- Fields:
  - All fields from displayPuzzle
  - `movedToHistoryAt`: timestamp

## Automatic Rotation Logic

### When Does Rotation Happen?

1. **On App Load** (HomeView.vue)

   - Checks if current display puzzle has expired
   - If expired or missing, automatically rotates

2. **Manual Trigger** (Admin Panel)
   - Admin can force rotation at any time
   - Useful for testing or emergency changes

### Rotation Process

```
1. Check if displayPuzzle/current exists and is valid
2. If expired or missing:
   a. Move current puzzle to historyPuzzles (if exists)
   b. Get oldest approved puzzle (FIFO by createdAt)
   c. Set as new display puzzle with expiry = 11:59:59 PM IST today
   d. Delete from approvedPuzzles
3. If not expired:
   - Continue showing current puzzle
```

### Expiry Time Calculation (IST)

- **Start**: 12:00:00 AM IST
- **End**: 11:59:59 PM IST
- Timezone: Asia/Kolkata (UTC+5:30)

## Admin Features

### Display Puzzle Panel

Shows:

- Current puzzle movie name
- Submitted by
- Expiry date/time in IST
- Rotate button

### Manual Rotation

- Button: "🔄 Rotate to Next"
- Confirms before rotating
- Moves current to history
- Sets next approved puzzle as display
- Updates both display and approved lists

## Firestore Security Rules

Update your Firestore rules to include the new collections:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    // Waiting puzzles - anyone can write (submissions)
    match /waitingPuzzles/{puzzleId} {
      allow read, write: if true;
    }

    // Approved puzzles - only authenticated admins can write
    match /approvedPuzzles/{puzzleId} {
      allow read: if true;
      allow write: if request.auth != null;
    }

    // Display puzzle - anyone can read, only admins can write
    match /displayPuzzle/{docId} {
      allow read: if true;
      allow write: if request.auth != null;
    }

    // History puzzles - anyone can read, only admins can write
    match /historyPuzzles/{puzzleId} {
      allow read: if true;
      allow write: if request.auth != null;
    }

    // Rejected puzzles - only authenticated admins
    match /rejectedPuzzles/{puzzleId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## Files Modified/Created

### New Files:

1. `src/firebase/puzzleRotation.js` - Rotation service with all logic

### Modified Files:

1. `src/views/HomeView.vue` - Uses rotation service
2. `src/views/AdminView.vue` - Added display panel and manual rotation
3. `src/views/SubmitView.vue` - Saves to waitingPuzzles

## Testing the System

### Initial Setup:

1. Submit a few puzzles (they go to waitingPuzzles)
2. Login as admin
3. Approve some puzzles (they move to approvedPuzzles)
4. Click "Set First Puzzle" or "Rotate to Next"
5. Check HomeView - puzzle should appear

### Daily Rotation:

1. Wait until after 11:59:59 PM IST
2. Refresh HomeView
3. Old puzzle moves to history
4. New puzzle from approved appears

### Manual Rotation:

1. Login as admin
2. Click "🔄 Rotate to Next"
3. Current puzzle moves to history
4. Next approved puzzle becomes display

## Queue Length Calculation

The estimated publication date shown to users is calculated as:

```
Queue Length = waitingPuzzles.count + approvedPuzzles.count
Estimated Date = Today + Queue Length + 1 days
```

This gives users an idea of when their puzzle might appear.

## Important Notes

⚠️ **Single Display Puzzle**: Only ONE puzzle is displayed at a time (document ID: 'current')

⚠️ **FIFO Order**: Puzzles are displayed in the order they were approved (oldest first)

⚠️ **IST Timezone**: All expiry calculations use Indian Standard Time (UTC+5:30)

⚠️ **Automatic Cleanup**: Expired puzzles are automatically moved to history

⚠️ **No Duplicate Display**: Once a puzzle is displayed, it's moved to history and won't appear again
