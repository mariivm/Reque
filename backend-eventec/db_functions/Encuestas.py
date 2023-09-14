from db_functions.Connection import Connection

def SP_insertarEncuesta(idevento, carnet, calLugar, calHorario, calAct, calORrg, comene):
    conn = Connection().db
    cursor = conn.cursor()
    query = """\
        SET NOCOUNT ON;
        DECLARE @RC int;
        EXEC @RC = [eventec].[dbo].[Insert_Encuesta] ?, ?, ?, ?, ?, ?, ?
        SELECT @RC AS rc;
    """
    cursor.execute(query, (idevento, carnet, calLugar, calHorario, calAct, calORrg, comene))
    datos = cursor.fetchval()
    cursor.close()
    return datos

def SP_selectEncuestas(idevento):
    conn = Connection().db
    cursor = conn.cursor()
    query = """\
        EXEC [eventec].[dbo].[Select_Encuestas] ?
    """
    cursor.execute(query, (idevento))
    datos = cursor.fetchval()
    cursor.close()
    return datos