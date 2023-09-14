import pyodbc
import os
from dotenv import load_dotenv
load_dotenv()

class Connection():
    @staticmethod
    def db():
        return pyodbc.connect(os.environ["DB_URL"])