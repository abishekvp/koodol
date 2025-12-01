@echo off
echo ========================================
echo  Firebase Functions Deployment
echo ========================================
echo.

echo Step 1: Installing dependencies...
cd functions
call npm install
cd ..
echo.

echo Step 2: Deploying functions to Firebase...
call firebase deploy --only functions
echo.

echo ========================================
echo  Deployment Complete!
echo ========================================
echo.
echo Your automated puzzle rotation is now active!
echo - Daily rotation at 12:00 AM IST
echo - Backup check every hour
echo.
echo View logs: firebase functions:log
echo.
pause
