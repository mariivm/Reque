from Connection import connection

def fetchUsuario(usuarioID):
    conn = connection()
    cursor = conn.cursor()
    query = f"SELECT TOP 1 us.usuarioid, us.correo, us.tipo FROM Usuarios us WHERE usuarioid = {usuarioID}"
    cursor.execute(query)
    datos = cursor.fetchone()
    cursor.close()
    conn.close()
    return datos