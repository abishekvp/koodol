# Automated Puzzle Rotation Setup Guide

## Overview

This guide will help you set up **automatic daily puzzle rotation** that runs at **12:00 AM IST** every day using Firebase Cloud Functions.

## What Gets Automated

### 🕐 Daily Rotation (Midnight IST)

- **Time**: 00:00:00 AM IST (12 midnight)
- **Action**: Automatically rotates to the next approved puzzle
- **Process**:
  1. Current display puzzle → Moved to history
  2. Oldest approved puzzle → Becomes new display puzzle
  3. Expiry set to 23:59:59 PM IST same day

### 🔄 Backup Rotation (Every Hour)

- **Time**: Every hour (00:00, 01:00, 02:00, etc.)
- **Action**: Checks if rotation is needed
- **Purpose**: Ensures rotation happens even if midnight function fails

## Setup Instructions

### Step 1: Install Firebase CLI (if not already installed)

```bash
npm install -g firebase-tools
```

### Step 2: Login to Firebase

```bash
firebase login
```

### Step 3: Install Functions Dependencies

```bash
cd functions
npm install
cd ..
```

### Step 4: Deploy Cloud Functions

```bash
firebase deploy --only functions
```

This will deploy three functions:

- `rotateDailyPuzzle` - Runs at midnight IST
- `checkAndRotatePuzzle` - Runs every hour as backup
- `manualRotatePuzzle` - Callable function for manual rotation

### Step 5: Verify Deployment

After deployment, you should see output like:

```
✔  functions[rotateDailyPuzzle(us-central1)] Successful create operation.
✔  functions[checkAndRotatePuzzle(us-central1)] Successful create operation.
✔  functions[manualRotatePuzzle(us-central1)] Successful create operation.
```

## Cloud Functions Explained

### 1. `rotateDailyPuzzle` (Scheduled)

- **Schedule**: `30 18 * * *` (18:30 UTC = 00:00 IST)
- **Timezone**: Asia/Kolkata
- **Runs**: Every day at midnight IST
- **What it does**:
  1. Moves current display puzzle to history
  2. Gets oldest approved puzzle (FIFO)
  3. Sets it as new display puzzle
  4. Sets expiry to 11:59:59 PM IST today
  5. Deletes from approved collection

### 2. `checkAndRotatePuzzle` (Scheduled)

- **Schedule**: `0 * * * *` (every hour)
- **Timezone**: Asia/Kolkata
- **Runs**: Every hour
- **What it does**:
  1. Checks if display puzzle exists
  2. Checks if it has expired
  3. If expired or missing, triggers rotation
  4. Otherwise, does nothing

### 3. `manualRotatePuzzle` (Callable)

- **Type**: HTTPS Callable Function
- **Auth**: Requires authentication
- **What it does**: Same as automatic rotation, but triggered manually

## Monitoring Functions

### View Logs

```bash
firebase functions:log
```

### View Specific Function Logs

```bash
firebase functions:log --only rotateDailyPuzzle
```

### Check Function Status

Go to Firebase Console:

1. Navigate to **Functions** section
2. See all deployed functions
3. View execution logs and metrics

## Testing

### Test Locally (Emulator)

```bash
firebase emulators:start --only functions
```

### Trigger Manual Rotation (for testing)

You can trigger rotation manually from the admin panel using the "🔄 Rotate to Next" button, or programmatically call the function.

### Check Next Scheduled Run

In Firebase Console → Functions → rotateDailyPuzzle:

- You'll see the next scheduled execution time

## Important Notes

⚠️ **Timezone**: All schedules use IST (Asia/Kolkata)

⚠️ **FIFO Order**: Puzzles are rotated in the order they were approved (oldest first)

⚠️ **Automatic Cleanup**: Expired puzzles are automatically moved to history

⚠️ **Backup System**: Hourly check ensures rotation happens even if midnight function fails

⚠️ **Cost**: Firebase Cloud Functions have a free tier:

- 2M invocations/month free
- Your usage: ~48 invocations/day (2 functions × 24 hours)
- Well within free tier limits!

## Troubleshooting

### Functions Not Deploying

```bash
# Check if you're logged in
firebase login

# Check project
firebase use --add

# Try deploying again
firebase deploy --only functions
```

### Functions Not Running

1. Check Firebase Console → Functions → Logs
2. Verify timezone is set correctly
3. Check Firestore security rules allow function access

### Manual Test Rotation

From admin panel, click "🔄 Rotate to Next" to test the rotation logic.

## Pricing

Firebase Cloud Functions pricing (as of 2024):

- **Free Tier**: 2M invocations/month
- **Your Usage**: ~1,500 invocations/month (48/day × 31 days)
- **Cost**: $0 (well within free tier)

## Timeline

After deployment:

- **First rotation**: Next midnight (00:00 AM IST)
- **Subsequent rotations**: Every day at midnight
- **Backup checks**: Every hour

## Updating Functions

If you need to modify the rotation logic:

```bash
# Edit functions/index.js
# Then redeploy
firebase deploy --only functions
```

## Removing Functions

If you want to remove the automated rotation:

```bash
firebase functions:delete rotateDailyPuzzle
firebase functions:delete checkAndRotatePuzzle
firebase functions:delete manualRotatePuzzle
```

---

## Quick Start Commands

```bash
# 1. Install dependencies
cd functions
npm install
cd ..

# 2. Deploy functions
firebase deploy --only functions

# 3. View logs
firebase functions:log

# Done! Your puzzles will now rotate automatically at midnight IST! 🎉
```
