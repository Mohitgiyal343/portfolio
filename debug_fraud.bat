@echo off
cd /d "d:\Credit card fraud detection"
if exist ".venv\Scripts\activate.bat" call ".venv\Scripts\activate.bat"
python app.py
