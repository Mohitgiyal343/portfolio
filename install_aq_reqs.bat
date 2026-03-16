@echo off
cd /d "d:\air quality prediction"

if not exist ".venv" (
    echo Creating virtual environment...
    python -m venv .venv
)

if exist ".venv\Scripts\activate.bat" (
    echo Activating venv...
    call ".venv\Scripts\activate.bat"
) else (
    echo Venv activation script not found! Using global python.
)

echo Installing requirements...
pip install -r requirements.txt

echo.
echo Starting app to test...
python app.py
pause
