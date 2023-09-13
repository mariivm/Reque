import pyodbc
import os
from dotenv import load_dotenv
load_dotenv()

class Connection():
    def __new__(self):
        if not hasattr(self, 'instance'):
            self.db = pyodbc.connect(os.environ["DB_URL"])
            self.instance = super(Connection, self).__new__(self)
        return self.instance