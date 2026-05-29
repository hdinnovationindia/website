@echo off
title HDII Website Upload

echo ============================
echo HDII Website GitHub Upload
echo ============================

cd /d "%~dp0"

git init

git remote remove origin 2>nul

git remote add origin https://github.com/hdinnovationindia/website.git

git add .

set /p msg=Enter Commit Message :

git commit -m "%msg%"

git branch -M main

git push -u origin main

pause