from inspect import getdoc
from tkinter import N
from urllib import response
from flask import *
from user_db import databasemain
from flask_cors import CORS
from flask_restful import Api, Resource
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from pyhpo import Ontology
import random
from tempcode import *



app = Flask(__name__)
app.secret_key = "sainadh"
CORS(app)
api = Api(app)
_ = Ontology()

app.config["JWT_SECRET_KEY"] = "secret-key"
jwt = JWTManager(app)


with app.app_context():
    cur, conn = databasemain()


@app.route('/userinfo')
@jwt_required()
def index():
    return jsonify({"message": "success"})
    # if request.method == 'POST':
    #     email=request.form.get('email',None)
    #     password=request.form.get('password',None)
    #     # if email!='sainadh@gmail.com' or password!='sainadh':
    #     #     return jsonify({"msg": "Bad username or password"}), 401
    #     access_token = create_access_token(identity=email)
    #     return jsonify({"access_token": access_token})


@app.route("/phenotypes", methods=["GET", "POST"])
def phenotype():
    if(request.method == "POST"):
        data = request.get_json()
        session['noofdocs'] = data['noofdocs']
        session['phenotypes'] = data['phenotypes']
        for p in data:
            pass
        return "true"


class Login(Resource):
    def __init__(self, **kwargs):
        self.conn = kwargs['conn']
        self.cur = kwargs['cur']

    def get(self):
        return jsonify({"message": "Success"})

    def post(self):
        email = request.form.get('email', None)
        password = request.form.get('password', None)
        sql = f"select * from users where email='{email}' and password='{password}'"
        self.cur.execute(sql)
        user = self.cur.fetchall()
        if (user) == None:
            return jsonify({"error": "Wrong email or password"})
        access_token = create_access_token(identity=email)
        return jsonify({"access_token": access_token})


api.add_resource(
    Login, '/login', resource_class_kwargs={'conn': conn, 'cur': cur})


class Register(Resource):
    def __init__(self, **kwargs):
        self.conn = kwargs['conn']
        self.cur = kwargs['cur']

    def get(self):
        return True

    def post(self):
        users = request.get_json(force=True)
        name = users['name']
        email = users['email']
        password = users['password']
        sql = f"select * from users where email='{email}'"
        self.cur.execute(sql)
        user = self.cur.fetchall()
        # return len(user)
        if user == None:
            return jsonify({'message': 'user already exists'})
        sql = f"INSERT INTO users (name, email, password) VALUES('{name}','{email}','{password}')"
        self.cur.execute(sql)
        self.conn.commit()
        return True


api.add_resource(
    Register, '/register', resource_class_kwargs={'conn': conn, 'cur': cur})





class Users(Resource):
    def __init__(self, **kwargs):
        self.conn = kwargs['conn']
        self.cur = kwargs['cur']

    def get(self):
        sql = "SELECT * FROM users"
        self.cur.execute(sql)
        users = self.cur.fetchall()
        self.conn.commit()
        return jsonify(users)

    def post(self):
        # user = request.get_json(force=True)
        # # sql = f"INSERT INTO users VALUES( '{user['name']}' '{user['email']}','{user['password']}')"
        # self.cur.execute(sql)
        # self.conn.commit()
        return True


api.add_resource(
    Users, '/users', resource_class_kwargs={'conn': conn, 'cur': cur})



class Documents(Resource):
    def __init__(self, **kwargs):
        self.conn = kwargs['conn']
        self.cur = kwargs['cur']
        
    def getdocuments(self,noofdocuments,setofphenotypes=[]):
        list1 = []
        noofdocument = int(noofdocuments["nofdocs"])
        # return setofphenotypes
        inputterms = list(setofphenotypes['phenotypes'])
        # for i in range(0,noofdocument):
        #     list1.append({'link':f'http://www.w3.org/2001/XMLSchema-instance{i}', 'score':random.randint(0,100)}) 
        hellobrother(inputterms)
        list1 = sorted(response, key=lambda d: d['score'], reverse=True)
        list1 = list1[:noofdocument]
        return list1
    

    def get(self):
        list1 = self.getdocuments(session['noofdocs'],session['phenotypes'])
        return jsonify(list1)

    def post(self):
        return True


api.add_resource(Documents, '/documents', resource_class_kwargs={'conn': conn, 'cur': cur})


if __name__ == '__main__':
    app.run(debug=True)
