from db_functions.Connection import Connection

def SP_insertarEvento():
    conn = Connection().db
    cursor = conn.cursor()
    query = """\
        SET NOCOUNT ON;
        DECLARE @RC int;
        EXEC @RC = [my_database].[dbo].[my_sp] ?, ?, ?
        SELECT @RC AS rc;
    """
    cursor.execute(query, ())
    datos = cursor.fetchval()
    cursor.close()
    return datos