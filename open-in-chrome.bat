@echo off
REM Open the Vite dev server in a new command window and launch Chrome to localhost.
cd /d "%~dp0"
start "Vite Dev Server" cmd /k "npm run dev"
timeout /t E /nobreak >nul
start "" "chrome" "http://localhost:5173"
echo Launched Chrome at http://localhost:5173
echo If the server uses a different port, update this file accordingly.
pause
