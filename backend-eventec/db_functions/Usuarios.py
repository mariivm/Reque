from db_functions.Connection import Connection

def fetchUsuarioAso(correo, contrasena):
    conn = Connection().db
    cursor = conn.cursor()
    query = f"SELECT * FROM Usuarios"
    cursor.execute(query)
    datos = cursor.fetchval()
    cursor.close()
    return datos

def SP_insertarAso(correo, nombre, contrasena):
    conn = Connection().db
    cursor = conn.cursor()
    query = """\
        SET NOCOUNT ON;
        DECLARE @RC int;
        EXEC @RC = [my_database].[dbo].[my_sp] ?, ?, ?
        SELECT @RC AS rc;
    """
    cursor.execute(query, (correo, nombre, contrasena))
    datos = cursor.fetchval()
    cursor.close()
    return datos

def fetchUsuarioEstudiante(correo, contrasena):
    conn = Connection().db
    cursor = conn.cursor()
    query = f"SELECT * FROM Usuarios"
    cursor.execute(query)
    datos = cursor.fetchval()
    cursor.close()
    return datos

def SP_insertarEstudiante(correo, nombre, contrasena, carne):
    conn = Connection().db
    cursor = conn.cursor()
    query = """\
        SET NOCOUNT ON;
        DECLARE @RC int;
        EXEC @RC = [my_database].[dbo].[my_sp] ?, ?, ?, ?
        SELECT @RC AS rc;
    """
    cursor.execute(query, (correo, nombre, contrasena, carne))
    datos = cursor.fetchval()
    cursor.close()
    return datos