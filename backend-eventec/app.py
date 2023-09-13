from flask import Flask, request, jsonify, make_response
from flask_cors import CORS, cross_origin
import os
import jwt
from datetime import datetime, timedelta
from dotenv import load_dotenv
load_dotenv()
import db_functions.Usuarios as Usuario


# App Config: os.environ son del archivo .env que no esta en git
app = Flask(__name__)
cors = CORS(app, origins='http://localhost:5173')
app.secret_key = os.environ["APP_SECRET"]

# Ruta que despues entrega react
@app.route('/')
def reactApp():
    return jsonify({'statusCode': 200, 'msg': 'Aca se sirve la app de react', 'errors': []})

# Auth:
@app.route('/api/login/aso', methods=['POST', 'OPTIONS'])
@cross_origin()
def loginAso():
    authInfo = request.get_json()
    correo = authInfo['correoAsociacion']
    contrasena = authInfo['contrasena']
    usuario = Usuario.fetchUsuarioAso(correo, contrasena)
    
    return jsonify({'statusCode': 200, 'user': "usuario", 'auth_token': "token.decode('UTF-8')",  'errors': []}) #temporal para logearse
    if (not usuario): 
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['El usuario o la contraseña no son correctas']}
        res = jsonify(res)
        return res

    token = jwt.encode({
        'public_id': usuario.usuarioid,
        'exp': datetime.utcnow() + timedelta(minutes=120)
    }, app.config['APP_SECRET'])

    res = jsonify({'statusCode': 200, 'user': usuario, 'auth_token': token.decode('UTF-8'),  'errors': []})
    return res


@app.route('/api/register/aso', methods=['POST', 'OPTIONS'])
@cross_origin()
def registerAso():
    asoInfo = request.get_json()
    correo = asoInfo['correoAsociacion']
    nombre = asoInfo['nombreAsociacion']
    contrasena = asoInfo['contrasena']

    spRes = Usuario.SP_insertarAso(correo, nombre, contrasena)
    if (spRes == 1):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo crear el usuario']}
        res = jsonify(res)
        return res
    
    usuario = Usuario.fetchUsuarioAso(correo, contrasena)
    token = jwt.encode({
        'public_id': usuario.usuarioid,
        'exp': datetime.utcnow() + timedelta(minutes=120)
    }, app.config['APP_SECRET'])

    res = jsonify({'statusCode': 200, 'user': usuario, 'auth_token': token.decode('UTF-8'),  'errors': []})
    return res
    

@app.route('/api/login/estudiante', methods=['POST', 'OPTIONS'])
@cross_origin()
def loginEstudiante():
    authInfo = request.get_json()
    correo = authInfo['correoEstudiante']
    contrasena = authInfo['contrasena']
    usuario = Usuario.fetchUsuarioEstudiante(correo, contrasena)
    
    if (not usuario): 
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['El usuario o la contraseña no son correctas']}
        res = jsonify(res)
        return res

    token = jwt.encode({
        'public_id': usuario.usuarioid,
        'exp': datetime.utcnow() + timedelta(minutes=120)
    }, app.config['APP_SECRET'])

    res = jsonify({'statusCode': 200, 'user': usuario, 'auth_token': token.decode('UTF-8'),  'errors': []})
    return res


@app.route('/api/register/estudiante', methods=['POST', 'OPTIONS'])
@cross_origin()
def registerEstudiante():
    estuInfo = request.get_json()
    correo = estuInfo['correoEstudiante']
    nombre = estuInfo['nombreEstudiante']
    carne = estuInfo['carne']
    contrasena = estuInfo['contrasena']

    spRes = Usuario.SP_insertarEstudiante(correo, nombre, contrasena, carne)
    if (spRes == 1):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo crear el usuario']}
        res = jsonify(res)
        return res
    
    usuario = Usuario.fetchUsuarioEstudiante(correo, contrasena)
    token = jwt.encode({
        'public_id': usuario.usuarioid,
        'exp': datetime.utcnow() + timedelta(minutes=120)
    }, app.config['APP_SECRET'])

    res = jsonify({'statusCode': 200, 'user': usuario, 'auth_token': token.decode('UTF-8'),  'errors': []})
    return res



if __name__ == '__main__':
    app.run(debug=True)