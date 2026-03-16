import sys
import os

print(f"Python Executable: {sys.executable}")
print(f"Version: {sys.version}")

print("\n--- Checking Imports ---")
try:
    import flask
    print(f"Flask: {flask.__version__}")
except ImportError as e:
    print(f"Flask Check Failed: {e}")

try:
    import pandas
    print(f"Pandas: {pandas.__version__}")
except ImportError as e:
    print(f"Pandas Check Failed: {e}")

try:
    import sklearn
    print(f"Sklearn: {sklearn.__version__}")
except ImportError as e:
    print(f"Sklearn Check Failed: {e}")

try:
    import joblib
    print(f"Joblib: {joblib.__version__}")
except ImportError as e:
    print(f"Joblib Check Failed: {e}")

print("\n--- Checking Data File ---")
data_path = r'd:/air quality prediction/data/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69 (1).csv'
if os.path.exists(data_path):
    print(f"Data File Found: {data_path}")
else:
    print(f"Data File NOT Found: {data_path}")
    # List directory to see what is there
    dir_path = os.path.dirname(data_path)
    if os.path.exists(dir_path):
        print(f"Directory contents of {dir_path}:")
        print(os.listdir(dir_path))
    else:
        print(f"Directory not found: {dir_path}")

print("\n--- Diagnosis Complete ---")
