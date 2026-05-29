@echo off
title HDII Website Force Upload

cd /d "%~dp0"

echo ============================
echo FORCE UPLOAD TO GITHUB
echo ============================

git init

git remote remove origin 2>nul
git remote add origin https://github.com/hdinnovationindia/website.git

git add .

set /p msg=Enter Commit Message :

git commit -m "%msg%"

git branch -M main

git push -f origin main

echo.
echo Upload Complete!
pause