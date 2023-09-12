import pyodbc
import os

def connection():
    return pyodbc.connect(os.environ["DB_URL"])