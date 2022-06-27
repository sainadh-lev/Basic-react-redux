import mysql.connector

dbname="usersdatabase"

def createdatabase():
    db = mysql.connector.connect(host='localhost', user='root', password='jsainadh@2000')
    mycur = db.cursor()
    mycur.execute("create database if not exists {}".format(dbname))
    db.commit()
    
    
    
def createtable():
    db = mysql.connector.connect(host='localhost', user='root', password='jsainadh@2000',db=dbname)
    mycur = db.cursor()
    # mycur.execute("DROP TABLE IF EXISTS users")
    mycur.execute("CREATE TABLE IF NOT EXISTS users(name  VARCHAR(40) NOT NULL, email VARCHAR(40) NOT NULL, password VARCHAR(40) NOT NULL, PRIMARY KEY (email))")
    mycur.execute("delete from users")
    db.commit()

    
    
def databasemain():
    createdatabase()
    createtable()
    db = mysql.connector.connect(host='localhost', user='root', password='jsainadh@2000',db=dbname)
    mycur = db.cursor()
    return mycur,db    
