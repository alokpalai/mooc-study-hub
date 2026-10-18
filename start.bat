@echo off
title MOOC Study Hub (keep this window open while studying)
cd /d "%~dp0"
rem If the server is already running, just open the browser.
powershell -NoProfile -Command "try{Invoke-WebRequest http://localhost:8000 -UseBasicParsing -TimeoutSec 2 | Out-Null; exit 0}catch{exit 1}"
if %errorlevel%==0 (
  start "" http://localhost:8000
  exit
)
start "" cmd /c "timeout /t 2 >nul & start http://localhost:8000"
python serve.py
