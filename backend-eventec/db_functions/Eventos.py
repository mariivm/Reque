from db_functions.Connection import Connection

def SP_insertarEvento(nombre,detalles,fecha,lugar,duracion,cupos,aso):
    conn = Connection().db
    cursor = conn.cursor()
    query = """\
        SET NOCOUNT ON;
        DECLARE @RC int;
        EXEC @RC = [eventec].[dbo].[Insert_Eventos] ?, ?, ?, ?, ?, ?, ?
        SELECT @RC AS rc;
    """
    cursor.execute(query, (nombre,detalles,fecha,lugar,duracion,cupos,aso))
    datos = cursor.fetchval()
    cursor.close()
    return datos

def SP_selectEventos(carnet):
    conn = Connection().db
    cursor = conn.cursor()
    query = """\
        EXEC [eventec].[dbo].[selcEventos] ?
    """
    cursor.execute(query, (carnet))
    datos = cursor.fetchval()
    cursor.close()
    return datos

def SP_selectEventosInscritos(carnet):
    conn = Connection().db
    cursor = conn.cursor()
    query = """\
        EXEC [eventec].[dbo].[selEventosInscrpt] ?
    """
    cursor.execute(query, (carnet))
    datos = cursor.fetchval()
    cursor.close()
    return datos

def SP_selectEventosPasados(carnet):
    conn = Connection().db
    cursor = conn.cursor()
    query = """\
        EXEC [eventec].[dbo].[selEventosPas] ?
    """
    cursor.execute(query, (carnet))
    datos = cursor.fetchval()
    cursor.close()
    return datos

def SP_insertarInscripcion(idEvento,carnet):
    conn = Connection().db
    cursor = conn.cursor()
    query = """\
        SET NOCOUNT ON;
        DECLARE @RC int;
        EXEC @RC = [eventec].[dbo].[Insert_inscripcion] ?, ?
        SELECT @RC AS rc;
    """
    cursor.execute(query, (idEvento,carnet))
    datos = cursor.fetchval()
    cursor.close()
    return datos

def SP_insertarPropuesta(carnet, nombre, detalles, fecha, lugar, duracion, capacidad, nombreAsocia):
    conn = Connection().db
    cursor = conn.cursor()
    query = """\
        SET NOCOUNT ON;
        DECLARE @RC int;
        EXEC @RC = [eventec].[dbo].[Insert_Propuesta] ?, ?, ?, ?, ?, ?, ?, ?
        SELECT @RC AS rc;
    """
    cursor.execute(query, (carnet, nombre, detalles, fecha, lugar, duracion, capacidad, nombreAsocia))
    datos = cursor.fetchval()
    cursor.close()
    return datos