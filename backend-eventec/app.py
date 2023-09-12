from flask import Flask, request
from flask_cors import CORS, cross_origin
import json
import os
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
cors = CORS(app, resource={
    r"/*":{
        "origins":"*"
    }
})

app.secret_key = os.environ["APP_SECRET"]
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def reactApp():
    return {'statusCode': 200, 'msg': 'Aca se sirve la app de react', 'errors': []}

@app.route('/api/login/aso', methods=['POST'])
def login():
    if request.method == 'POST':
        auth = json.load(request.body)
        print(auth)

        return 'Este es el login'

if __name__ == '__main__':
    app.run(debug=True)