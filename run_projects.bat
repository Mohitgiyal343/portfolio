@echo off

echo Starting Portfolio App...
cd /d "d:\portfolio"
start "Portfolio App" cmd /k "python app.py"

echo Starting Credit Card Fraud Detection App...
cd /d "d:\Credit card fraud detection"
start "Fraud Detection App" cmd /k ""d:\Credit card fraud detection\.venv\Scripts\python.exe" app.py"

echo Starting Air Quality Prediction App...
cd /d "d:\air quality prediction"
start "Air Quality App" cmd /k ""d:\air quality prediction\.venv\Scripts\python.exe" app.py"

echo Starting Real-Time Analytics Dashboard App...
cd /d "E:\Automated Data Pipeline & Real-Time Analytics Dashboard"
start "Real-Time Dashboard App" cmd /k "run.bat"

echo.
echo All apps are starting...
echo Portfolio: http://localhost:5000
echo Fraud App: http://localhost:5001
echo Air Quality: http://localhost:5002
echo Real-Time Dashboard: http://localhost:5003
echo.
pause
