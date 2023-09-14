from flask import Flask, request, jsonify, make_response
from flask_cors import CORS, cross_origin
import os
import jwt
from datetime import datetime, timedelta
from dotenv import load_dotenv
load_dotenv()
import db_functions.Usuarios as Usuario
import db_functions.Eventos as Evento
import db_functions.Actividades as Actividad
import db_functions.Encuestas as Encuesta

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

    #return jsonify({'statusCode': 200, 'user': {"tipoUsuario": 1}, 'auth_token': '',  'errors': []})
    if (not usuario):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['El usuario o la contraseña no son correctas']}
        res = jsonify(res)
        return res
    
    token = jwt.encode({
        'public_id': usuario.usuarioid,
        'exp': datetime.utcnow() + timedelta(minutes=120)
    }, app.secret_key)

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
    }, app.secret_key)

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
    }, app.secret_key)

    res = jsonify({'statusCode': 200, 'user': usuario, 'auth_token': token.decode('UTF-8'),  'errors': []})
    return res


@app.route('/api/register/estudiante', methods=['POST', 'OPTIONS'])
@cross_origin()
def registerEstudiante():
    estuInfo = request.get_json()
    correo = estuInfo['correoInstitucional']
    nombre = estuInfo['nombreCompleto']
    carne = int(estuInfo['carnet'])
    contrasena = estuInfo['contrasena']

    spRes = Usuario.SP_insertarEstudiante(correo, nombre, contrasena, carne)
    if (spRes == 1):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo crear el usuario']}
        res = jsonify(res)
        return res

    usuario = Usuario.fetchUsuarioEstudiante(correo, contrasena)
    print(usuario)
    token = jwt.encode({
        'public_id': usuario[1],
        'exp': datetime.utcnow() + timedelta(minutes=120)
    }, app.secret_key)

    res = jsonify({'statusCode': 200, 'user': usuario, 'auth_token': token,  'errors': []})
    return res

@app.route('/api/insert/evento', methods=['POST', 'OPTIONS'])
@cross_origin()
def insertEvento():
    eventInfo = request.get_json()
    nombre = eventInfo['nombre']
    detalles = eventInfo['detalles']
    fecha = eventInfo['fecha']
    lugar = eventInfo['lugar']
    duracion = eventInfo['duracion']
    cupos = eventInfo['cupos']
    aso = eventInfo['aso']

    spRes = Evento.SP_insertarEvento(nombre,detalles,fecha,lugar,duracion,cupos,aso)
    if (spRes == 1):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo registrar el Evento']}
        res = jsonify(res)
        return res

    res = jsonify({'statusCode': 200})
    return res

@app.route('/api/select/evento', methods=['POST', 'OPTIONS'])
@cross_origin()
def selectEventos():
    estuInfo = request.get_json()
    carnet = estuInfo['carnet']

    spRes = Evento.SP_selectEventos(carnet)

    if (spRes == 1):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo consultar eventos']}
        res = jsonify(res)
        return res

    res = jsonify({'statusCode': 200, 'res': spRes})
    return res

@app.route('/api/select/eventoinscrito', methods=['POST', 'OPTIONS'])
@cross_origin()
def selectEventosInscritos():
    estuInfo = request.get_json()
    carnet = estuInfo['carnet']

    spRes = Evento.SP_selectEventosInscritos(carnet)

    if (spRes == 1):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo consultar eventos inscritos']}
        res = jsonify(res)
        return res

    res = jsonify({'statusCode': 200, 'res': spRes})
    return res

@app.route('/api/select/eventopasado', methods=['POST', 'OPTIONS'])
@cross_origin()
def selectEventosPasados():
    estuInfo = request.get_json()
    carnet = estuInfo['carnet']

    spRes = Evento.SP_selectEventosPasados(carnet)

    if (spRes == 1):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo consultar eventos pasados']}
        res = jsonify(res)
        return res

    res = jsonify({'statusCode': 200, 'res': spRes})
    return res

@app.route('/api/insert/inscripcion', methods=['POST', 'OPTIONS'])
@cross_origin()
def insertInscripcion():
    estuInfo = request.get_json()
    idEvento = estuInfo['idEvento']
    carnet = estuInfo['carnet']

    spRes = Evento.SP_insertarInscripcions(idEvento,carnet)

    if (spRes == 1):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo realizar la inscripcion']}
        res = jsonify(res)
        return res

    res = jsonify({'statusCode': 200})
    return res

@app.route('/api/insert/actividad', methods=['POST', 'OPTIONS'])
@cross_origin()
def insertActividad():
    actiInfo = request.get_json()
    idEvento = actiInfo ['idEvento']
    horaInicial = actiInfo ['horaInicial']
    horaFinal = actiInfo ['horaFinal']
    ubicacion = actiInfo ['ubicacion']
    nombre = actiInfo ['nombre']

    spRes = Actividad.SP_insertarActividad(idEvento,horaInicial,horaFinal,ubicacion,nombre)

    if (spRes == 1):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo insertar la actividad']}
        res = jsonify(res)
        return res

    res = jsonify({'statusCode': 200})
    return res

@app.route('/api/select/actividad', methods=['POST', 'OPTIONS'])
@cross_origin()
def selectActividades():
    actiInfo = request.get_json()
    idEvento = actiInfo ['idEvento']

    spRes = Actividad.SP_selectActividades(idEvento)

    if (spRes == 1):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo consultar la actividad']}
        res = jsonify(res)
        return res

    res = jsonify({'statusCode': 200, 'res': spRes})
    return res

@app.route('/api/insert/Encuesta', methods=['POST', 'OPTIONS'])
@cross_origin()
def insertEncuesta():
    encuesInfo = request.get_json()
    idEvento =  encuesInfo ['idEvento']
    carnet = encuesInfo ['carnet']
    calLugar = encuesInfo ['calLugar']
    calHorario = encuesInfo ['calHorario']
    calAct = encuesInfo ['calAct']
    calORrg = encuesInfo ['calORrg']
    comen = encuesInfo ['comene']

    spRes = Encuesta.SP_insertarEncuesta(idEvento, carnet, calLugar, calHorario, calAct, calORrg, comen)

    if (spRes == 1):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo insertar la Encuesta']}
        res = jsonify(res)
        return res

    res = jsonify({'statusCode': 200})
    return res

@app.route('/api/select/Encuesta', methods=['POST', 'OPTIONS'])
@cross_origin()
def selectEncuesta():
    encuesInfo = request.get_json()
    idEvento =  encuesInfo ['idEvento']

    spRes = Encuesta.SP_selectEncuestas(idEvento)

    if (spRes == 1):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo consultar la Encuesta']}
        res = jsonify(res)
        return res

    res = jsonify({'statusCode': 200})
    return res

@app.route('/api/insert/colaborador', methods=['POST', 'OPTIONS'])
@cross_origin()
def insertColaborador():
    colabInfo = request.get_json()
    carnet =  colabInfo['carnet']
    idEvento =  colabInfo['idEvento']

    spRes = Usuario.SP_insertarColaborador(carnet,idEvento)

    if (spRes == 1):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo insertar el colaborador']}
        res = jsonify(res)
        return res

    res = jsonify({'statusCode': 200})
    return res

@app.route('/api/eliminar/colaborador', methods=['POST', 'OPTIONS'])
@cross_origin()
def eliminarColaborador():
    colabInfo = request.get_json()
    carnet =  colabInfo['carnet']
    idEvento =  colabInfo['idEvento']

    spRes = Usuario.SP_eliminarColaborador(carnet,idEvento)

    if (spRes == 1):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo eliminar el colaborador']}
        res = jsonify(res)
        return res

    res = jsonify({'statusCode': 200})
    return res

@app.route('/api/select/asocias', methods=['POST', 'OPTIONS'])
@cross_origin()
def selectAsocias():
    spRes = Usuario.SP_selectAsocias()

    if (spRes == 1):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo consultar las asocias']}
        res = jsonify(res)
        return res

    res = jsonify({'statusCode': 200, 'res': spRes})
    return res

@app.route('/api/insert/propuestas', methods=['POST', 'OPTIONS'])
@cross_origin()
def insertPropuestas():
    propInfo = request.get_json()
    carnet =  propInfo['carnet']
    nombre =  propInfo['nombre ']
    detalles =  propInfo['detalles']
    fecha =  propInfo['fecha']
    lugar =  propInfo['lugar']
    duracion =  propInfo['duracion']
    capacidad =  propInfo['capacidad']
    nombreAsocia =  propInfo['nombreAsocia']

    spRes = Evento.SP_insertarPropuesta(carnet, nombre, detalles, fecha, lugar, duracion, capacidad, nombreAsocia)

    if (spRes == 1):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo insertar la propuesta']}
        res = jsonify(res)
        return res

    res = jsonify({'statusCode': 200, 'res': spRes})
    return res

if __name__ == '__main__':
    app.run(debug=True)