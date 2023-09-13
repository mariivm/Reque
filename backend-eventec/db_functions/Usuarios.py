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
<<<<<<< HEAD
        DECLARE @RC  int;
        EXEC @RC = [eventec].[dbo].[Reg_Aso] ?, ?, ?
=======
        DECLARE @RC int;
        EXEC @RC = [dbo]. ?, ?, ?
>>>>>>> 620435f4453c6f3bdef4420f8f2654b512eb7ccc
        SELECT @RC AS rc;
    """
    cursor.execute(query, (correo, nombre, contrasena))
    datos = cursor.fetchval()
    cursor.close()
    return datos

def fetchUsuarioEstudiante(correo, contrasena):
    conn = Connection().db
    cursor = conn.cursor()
<<<<<<< HEAD
    query = """\
        EXEC [eventec].[dbo].[Login_Estu] ?, ?
        """
    cursor.execute(query,(correo,contrasena))
=======
    query = query = """\
        SET NOCOUNT ON;
        DECLARE @RC int;
        EXEC @RC = [my_database].[dbo].[my_sp] ?, ?, ?, ?
        SELECT @RC AS rc;
    """
    cursor.execute(query)
>>>>>>> 620435f4453c6f3bdef4420f8f2654b512eb7ccc
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
    cursor.execute(query, (correo, nombre, contrasena, carne))
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

