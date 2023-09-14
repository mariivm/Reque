from db_functions.Connection import Connection

def SP_insertarEvento(nombre,detalles,fecha,lugar,duracion,cupos,aso):
    conn = Connection().db()
    cursor = conn.cursor()
    query = """\
        SET NOCOUNT ON;
        DECLARE @RC int;
        EXEC @RC = [eventec].[dbo].[Insert_Eventos] ?, ?, ?, ?, ?, ?, ?
        SELECT @RC AS rc;
    """
    cursor.execute(query, (nombre,detalles,fecha,lugar,duracion,cupos,aso))
    columns = [column[0] for column in cursor.description]
    datos = []
    for row in cursor.fetchall():
        datos.append(dict(zip(columns, row)))
    cursor.close()
    conn.commit()
    conn.close()
    return datos

def SP_selectEventos(carnet):
    conn = Connection().db()
    cursor = conn.cursor()
    query = """\
        -- EXEC [eventec].[dbo].[selcEventos] ACAVASIGNODEPREGUNTA

        SELECT qI.eventoid, qI.titulo, qI.descrip, qI.fecha, qI.lugar, qI.duracion, qI.capacidad, qI.inscripciones, COALESCE(qEI.inscripcionid, 0) as estaInscrito
FROM
(SELECT e.eventoid, e.titulo, e.descrip, e.fecha, e.lugar, e.duracion, e.capacidad, count(inscripcionid) as inscripciones 
FROM Eventos e 
LEFT JOIN Inscripciones i on e.eventoid = i.eventoid
WHERE e.fecha >= GETDATE()
GROUP BY e.eventoid, e.titulo, e.descrip, e.fecha, e.lugar, e.duracion, e.capacidad) AS qI
LEFT JOIN
(SELECT e.eventoid, i.inscripcionid FROM Eventos e 
INNER JOIN Inscripciones i on e.eventoid = i.eventoid
WHERE e.fecha >= GETDATE() AND i.carnet = ?) AS qEI on qEI.eventoid = qI.eventoid;
    """
    cursor.execute(query, (carnet))
    columns = [column[0] for column in cursor.description]
    datos = []
    for row in cursor.fetchall():
        datos.append(dict(zip(columns, row)))
    cursor.close()
    return datos

def SP_selectEventosInscritos(carnet):
    conn = Connection().db()
    cursor = conn.cursor()
    query = """\
        EXEC [eventec].[dbo].[selEventosInscrpt] ?
    """
    cursor.execute(query, (carnet))
    columns = [column[0] for column in cursor.description]
    datos = []
    for row in cursor.fetchall():
        datos.append(dict(zip(columns, row)))
    cursor.close()
    conn.close()
    return datos

def SP_selectEventosPasados(carnet):
    conn = Connection().db()
    cursor = conn.cursor()
    query = """\
        EXEC [eventec].[dbo].[selEventosPas] ?
    """
    cursor.execute(query, (carnet))
    columns = [column[0] for column in cursor.description]
    datos = []
    for row in cursor.fetchall():
        datos.append(dict(zip(columns, row)))
    cursor.close()
    conn.close()
    return datos

def SP_insertarInscripcion(idEvento,carnet):
    conn = Connection().db()
    cursor = conn.cursor()
    query = """\
        SET NOCOUNT ON;
        DECLARE @RC int;
        EXEC @RC = [eventec].[dbo].[Insert_inscripcion] ?, ?
        SELECT @RC AS rc;
    """
    cursor.execute(query, (idEvento,carnet))
    columns = [column[0] for column in cursor.description]
    datos = []
    for row in cursor.fetchall():
        datos.append(dict(zip(columns, row)))
    cursor.close()
    conn.commit()
    conn.close()
    return datos

def SP_insertarPropuesta(carnet, nombre, detalles, fecha, lugar, duracion, capacidad, nombreAsocia):
    conn = Connection().db()
    cursor = conn.cursor()
    query = """\
        SET NOCOUNT ON;
        DECLARE @RC int;
        EXEC @RC = [eventec].[dbo].[Insert_Propuesta] ?, ?, ?, ?, ?, ?, ?, ?
        SELECT @RC AS rc;
    """
    cursor.execute(query, (carnet, nombre, detalles, fecha, lugar, duracion, capacidad, nombreAsocia))
    columns = [column[0] for column in cursor.description]
    datos = []
    for row in cursor.fetchall():
        datos.append(dict(zip(columns, row)))
    cursor.close()
    conn.commit()
    conn.close()
    return datos

def SP_selectPropuestas(asociacionid):
    conn = Connection().db()
    cursor = conn.cursor()
    query = """\
        SELECT titulo, descrip, fecha, lugar, duracion, capacidad FROM Propuestas WHERE asociaid = ?
    """
    cursor.execute(query, (asociacionid))
    columns = [column[0] for column in cursor.description]
    datos = []
    for row in cursor.fetchall():
        datos.append(dict(zip(columns, row)))
    cursor.close()
    conn.close()
    return datos