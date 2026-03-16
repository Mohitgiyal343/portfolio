@echo off
echo Fixing Air Quality App Environment...
cd /d "d:\air quality prediction"

echo Creating virtual environment if missing...
if not exist ".venv" python -m venv .venv

echo Activating environment...
call ".venv\Scripts\activate.bat"

echo Installing required packages...
pip install flask pandas numpy scikit-learn joblib matplotlib seaborn

echo.
echo Starting app to verify...
python app.py
pause
