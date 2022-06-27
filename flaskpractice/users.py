
class users():
    def __init__(self,**kwargs):
        self.conn = kwargs['conn']
        self.cur = kwargs['cur']
        
    def get(self):
        sql = "select * from users"
        allusers=self.cur.execute(sql)
        self.conn.commit()
        return allusers
    
    def post(self,data):
        email = data['email']
        name = data['name']
        sql = f"insert into users(name,email) values('{name}','{email}')"
        self.cur.execute(sql)
        self.conn.commit()    