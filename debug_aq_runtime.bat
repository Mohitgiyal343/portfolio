@echo off
cd /d "d:\air quality prediction"
echo Starting App... > d:\portfolio\aq_error_log.txt
"d:\air quality prediction\.venv\Scripts\python.exe" app.py >> d:\portfolio\aq_error_log.txt 2>&1
