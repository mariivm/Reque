from db_functions.Connection import Connection

def fetchUsuarioAso(correo, contrasena):
    conn = Connection().db
    cursor = conn.cursor()
    query = """\
        EXEC [eventec].[dbo].[Login_Aso] ?, ?
        """
    cursor.execute(query,(correo, contrasena))
    datos = cursor.fetchval()
    cursor.close()
    return datos

def SP_insertarAso(correo, nombre, contrasena):
    conn = Connection().db
    cursor = conn.cursor()
    query = """\
        SET NOCOUNT ON;
        DECLARE @RC  int;
        EXEC @RC = [eventec].[dbo].[Reg_Aso] ?, ?, ?
        SELECT @RC AS rc;
    """
    cursor.execute(query, (nombre, correo, contrasena))
    datos = cursor.fetchval()
    cursor.close()
    return datos

def fetchUsuarioEstudiante(correo, contrasena):
    conn = Connection().db
    cursor = conn.cursor()
    query = """\
        EXEC [eventec].[dbo].[Login_Estu] ?, ?
        """
    cursor.execute(query,(correo,contrasena))
    columns = [column[0] for column in cursor.description]
    datos = []
    datos = cursor.fetchval()
    cursor.close()
    return datos

def SP_insertarEstudiante(correo, nombre, contrasena, carne):
    conn = Connection().db
    cursor = conn.cursor()
    query = """\
        SET NOCOUNT ON;
        DECLARE @RC int;
        EXEC @RC = [eventec].[dbo].[Reg_Estu] ?, ?, ?, ?
        SELECT @RC AS rc;
    """
    cursor.execute(query, (nombre, carne, correo, contrasena))
    datos = cursor.fetchval()
    cursor.close()
    return datos

def SP_insertarColaborador(carnet, idEvento):
    conn = Connection().db
    cursor = conn.cursor()
    query = """\
        SET NOCOUNT ON;
        DECLARE @RC int;
        EXEC @RC = [eventec].[dbo].[Insert_Colaborador] ?, ?
        SELECT @RC AS rc;
    """
    cursor.execute(query, (carnet, idEvento))
    datos = cursor.fetchval()
    cursor.close()
    return datos

def SP_eliminarColaborador(carnet, idEvento):
    conn = Connection().db
    cursor = conn.cursor()
    query = """\
        SET NOCOUNT ON;
        DECLARE @RC int;
        EXEC @RC = [eventec].[dbo].[Eliminar_Colaborador] ?, ?
        SELECT @RC AS rc;
    """
    cursor.execute(query, (carnet, idEvento))
    datos = cursor.fetchval()
    cursor.close()
    return datos

def SP_selectAsocias():
    conn = Connection().db
    cursor = conn.cursor()
    query = """\
        EXEC [eventec].[dbo].[Select_Asocias]
    """
    cursor.execute(query)
    datos = cursor.fetchval()
    cursor.close()
    return datos

