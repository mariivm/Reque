from db_functions.Connection import Connection

def SP_insertarActividad(idEvento, horaInicial, horaFinal, ubicacion, nombre):
    conn = Connection().db
    cursor = conn.cursor()
    query = """\
        SET NOCOUNT ON;
        DECLARE @RC int;
        EXEC @RC = [eventec].[dbo].[Insert_Actividades] ?, ?, ?, ?, ?
        SELECT @RC AS rc;
    """
    cursor.execute(query, (idEvento, horaInicial, horaFinal, ubicacion, nombre))
    columns = [column[0] for column in cursor.description]
    datos = []
    for row in cursor.fetchall():
        datos.append(dict(zip(columns, row)))
    cursor.close()
    return datos

def SP_selectActividades(idEvento):
    conn = Connection().db
    cursor = conn.cursor()
    query = """\
        EXEC [eventec].[dbo].[Select_Actividades] ?
    """
    cursor.execute(query, (idEvento))
    columns = [column[0] for column in cursor.description]
    datos = []
    for row in cursor.fetchall():
        datos.append(dict(zip(columns, row)))
    cursor.close()
    return datos

