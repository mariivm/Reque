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
    #return jsonify({'statusCode': 200, 'user': {"tipoUsuario": 0}, 'auth_token': '',  'errors': []})
    if (not usuario):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['El usuario o la contraseña no son correctas']}
        res = jsonify(res)
        return res
    
    usuario = usuario[0]
    token = jwt.encode({
        'public_id': usuario['usuarioid'],
        'exp': datetime.utcnow() + timedelta(minutes=120)
    }, app.secret_key)

    res = jsonify({'statusCode': 200, 'user': usuario, 'auth_token': token,  'errors': []})
    return res

@app.route('/api/register/aso', methods=['POST', 'OPTIONS'])
@cross_origin()
def registerAso():
    asoInfo = request.get_json()
    correo = asoInfo['correoAsociacion']
    nombre = asoInfo['nombreAsociacion']
    contrasena = asoInfo['contrasena']

    spRes = Usuario.SP_insertarAso(correo, nombre, contrasena)
    if (not spRes):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo crear el usuario']}
        res = jsonify(res)
        return res

    usuario = Usuario.fetchUsuarioAso(correo, contrasena)[0]
    token = jwt.encode({
        'public_id': usuario['usuarioid'],
        'exp': datetime.utcnow() + timedelta(minutes=120)
    }, app.secret_key)

    res = jsonify({'statusCode': 200, 'user': usuario, 'auth_token': token,  'errors': []})
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
    
    usuario = usuario[0]
    token = jwt.encode({
        'public_id': usuario['usuarioid'],
        'exp': datetime.utcnow() + timedelta(minutes=120)
    }, app.secret_key)

    res = jsonify({'statusCode': 200, 'user': usuario, 'auth_token': token,  'errors': []})
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
    if (not spRes):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo crear el usuario']}
        res = jsonify(res)
        return res

    usuario = Usuario.fetchUsuarioEstudiante(correo, contrasena)[0]
    token = jwt.encode({
        'public_id': usuario['usuarioid'],
        'exp': datetime.utcnow() + timedelta(minutes=120)
    }, app.secret_key)

    res = jsonify({'statusCode': 200, 'user': usuario, 'auth_token': token,  'errors': []})
    return res

@app.route('/api/insert/evento', methods=['POST', 'OPTIONS'])
@cross_origin()
def insertEvento():
    eventInfo = request.get_json()
    nombre = eventInfo['nombre']
    detalles = eventInfo['descripcion']
    fecha = eventInfo['fechaHora']
    lugar = eventInfo['lugar']
    duracion = eventInfo['duracion']
    cupos = eventInfo['capacidad']
    aso = eventInfo['asociacionid']

    spRes = Evento.SP_insertarEvento(nombre,detalles,fecha,lugar,duracion,cupos,aso)
    if (not spRes):
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
    if (not spRes):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo consultar eventos']}
        res = jsonify(res)
        return res

    for evento in spRes:
        resultActividades = Actividad.SP_selectActividades(evento['eventoid'])
        actividades = resultActividades
        evento['actividades'] = actividades

    res = jsonify({'statusCode': 200, 'res': spRes})
    return res

@app.route('/api/select/eventoinscrito', methods=['POST', 'OPTIONS'])
@cross_origin()
def selectEventosInscritos():
    estuInfo = request.get_json()
    carnet = estuInfo['carnet']

    spRes = Evento.SP_selectEventosInscritos(carnet)

    if (not spRes):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo consultar eventos inscritos']}
        res = jsonify(res)
        return res

    for evento in spRes:
        resultActividades = Actividad.SP_selectActividades(evento['eventoid'])
        actividades = resultActividades
        evento['actividades'] = actividades

    res = jsonify({'statusCode': 200, 'res': spRes})
    return res

@app.route('/api/select/eventopasado', methods=['POST', 'OPTIONS'])
@cross_origin()
def selectEventosPasados():
    estuInfo = request.get_json()
    carnet = estuInfo['carnet']

    spRes = Evento.SP_selectEventosPasados(carnet)

    if (not spRes):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo consultar eventos pasados']}
        res = jsonify(res)
        return res

    for evento in spRes:
        resultActividades = Actividad.SP_selectActividades(evento['eventoid'])
        actividades = resultActividades
        evento['actividades'] = actividades

    res = jsonify({'statusCode': 200, 'res': spRes})
    return res

@app.route('/api/insert/inscripcion', methods=['POST', 'OPTIONS'])
@cross_origin()
def insertInscripcion():
    estuInfo = request.get_json()
    idEvento = estuInfo['eventoid']
    carnet = estuInfo['carnet']

    spRes = Evento.SP_insertarInscripcion(idEvento,carnet)

    if (not spRes):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo realizar la inscripcion']}
        res = jsonify(res)
        return res

    res = jsonify({'statusCode': 200})
    return res

@app.route('/api/insert/actividad', methods=['POST', 'OPTIONS'])
@cross_origin()
def insertActividad():
    actiInfo = request.get_json()
    idEvento = actiInfo ['evento']
    horaInicial = actiInfo ['horaInicio']
    horaFinal = actiInfo ['horaFinal']
    ubicacion = actiInfo ['ubicacion']
    nombre = actiInfo ['descripcion']

    spRes = Actividad.SP_insertarActividad(idEvento,horaInicial,horaFinal,ubicacion,nombre)

    if (not spRes):
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

    if (not spRes):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo consultar la actividad']}
        res = jsonify(res)
        return res

    res = jsonify({'statusCode': 200, 'res': spRes})
    return res

@app.route('/api/insert/encuesta', methods=['POST', 'OPTIONS'])
@cross_origin()
def insertEncuesta():
    encuesInfo = request.get_json()
    idEvento =  encuesInfo ['eventoid']
    carnet = encuesInfo ['carnet']
    calLugar = encuesInfo ['calLugar']
    calHorario = encuesInfo ['calHorario']
    calAct = encuesInfo ['calAct']
    calORrg = encuesInfo ['calOrg']
    comen = encuesInfo ['coment']

    spRes = Encuesta.SP_insertarEncuesta(idEvento, carnet, calLugar, calHorario, calAct, calORrg, comen)

    if (not spRes):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo insertar la Encuesta']}
        res = jsonify(res)
        return res

    res = jsonify({'statusCode': 200})
    return res

@app.route('/api/select/encuesta', methods=['POST', 'OPTIONS'])
@cross_origin()
def selectEncuesta():
    encuesInfo = request.get_json()
    idEvento =  encuesInfo ['eventoid']

    spRes = Encuesta.SP_selectEncuestas(idEvento)

    if (not spRes):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo consultar la Encuesta']}
        res = jsonify(res)
        return res

    res = jsonify({'statusCode': 200, 'res': spRes})
    return res

@app.route('/api/insert/colaborador', methods=['POST', 'OPTIONS'])
@cross_origin()
def insertColaborador():
    colabInfo = request.get_json()
    carnet =  colabInfo['carnet']
    idEvento =  colabInfo['idEvento']

    spRes = Usuario.SP_insertarColaborador(carnet,idEvento)

    if (not spRes):
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

    if (not spRes):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo eliminar el colaborador']}
        res = jsonify(res)
        return res

    res = jsonify({'statusCode': 200})
    return res

@app.route('/api/select/asocias', methods=['POST', 'OPTIONS'])
@cross_origin()
def selectAsocias():
    spRes = Usuario.SP_selectAsocias()

    if (not spRes):
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
    nombre =  propInfo['nombre']
    detalles =  propInfo['detalles']
    fecha =  propInfo['fecha']
    lugar =  propInfo['lugar']
    duracion =  propInfo['duracion']
    capacidad =  propInfo['capacidad']
    asociacionid =  propInfo['asociacionid']

    spRes = Evento.SP_insertarPropuesta(carnet, nombre, detalles, fecha, lugar, duracion, capacidad, asociacionid)

    if (not spRes):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo insertar la propuesta']}
        res = jsonify(res)
        return res

    res = jsonify({'statusCode': 200, 'res': spRes})
    return res

@app.route('/api/select/propuestas', methods=['POST', 'OPTIONS'])
@cross_origin()
def selectPropuestas():
    propInfo = request.get_json()
    asociacionid = propInfo['asociacionid']

    spRes = Evento.SP_selectPropuestas(asociacionid)

    if (not spRes):
        res = {'statusCode': 400, 'res':[], 'auth_token':'', 'errors': ['No se pudo insertar la propuesta']}
        res = jsonify(res)
        return res

    res = jsonify({'statusCode': 200, 'res': spRes})
    return res

@app.route('/api/select/eventos/propios', methods=['POST', 'OPTIONS'])
@cross_origin()
def selectEventosPropios():
    propInfo = request.get_json()
    asociacionid = propInfo['asociacionid']

    spRes = Evento.SP_selectEventosPropios(asociacionid)

    if (not spRes):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo insertar la propuesta']}
        res = jsonify(res)
        return res

    res = jsonify({'statusCode': 200, 'res': spRes})
    return res

@app.route('/api/select/eventos/estadisticas', methods=['POST', 'OPTIONS'])
@cross_origin()
def selectEstadisticas():
    propInfo = request.get_json()
    eventoid = propInfo['eventoid']

    spRes = Evento.SP_selectEstadisticas(eventoid)

    if (not spRes):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo realizar la consulta de estadisticas']}
        res = jsonify(res)
        return res

    res = jsonify({'statusCode': 200, 'res': spRes})
    return res

@app.route('/api/select/eventos/all', methods=['POST', 'OPTIONS'])
@cross_origin()
def selectAllEventos():
    propInfo = request.get_json()
    asociacionid = propInfo['asociacionid']

    spRes = Evento.SP_selectAllEventosPropios(asociacionid)

    if (not spRes):
        res = {'statusCode': 400, 'user': '', 'auth_token':'', 'errors': ['No se pudo realizar la consulta']}
        res = jsonify(res)
        return res

    res = jsonify({'statusCode': 200, 'res': spRes})
    return res

if __name__ == '__main__':
    app.run(debug=True)