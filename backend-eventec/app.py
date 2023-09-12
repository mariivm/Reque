from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import os
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
cors = CORS(app, origins='http://localhost:5173')
app.secret_key = os.environ["APP_SECRET"]

@app.route('/')
def reactApp():
    return jsonify({'statusCode': 200, 'msg': 'Aca se sirve la app de react', 'errors': []})

@app.route('/api/login/aso', methods=['POST', 'OPTIONS'])
@cross_origin()
def login():
    auth = request.get_json()
    print(auth['correoAsociacion'])

    res = jsonify({'statusCode': 200, 'user': 'aca va la info del usuario o false si no pego el login', 'errors': []})
    return res

if __name__ == '__main__':
    app.run(debug=True)