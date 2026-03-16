@echo off
cd /d "d:\air quality prediction"
if exist ".venv\Scripts\activate.bat" call ".venv\Scripts\activate.bat"
python app.py
pause
