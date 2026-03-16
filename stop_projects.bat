@echo off
echo Stopping all Python processes...
taskkill /F /IM python.exe /T
echo.
echo Stopping all Node processes (if any)...
taskkill /F /IM node.exe /T
echo.
echo.
echo Done.
pause
