
# from urllib import request
from flask import Flask,jsonify, render_template,request,redirect
from flask_pymongo import PyMongo
from pymongo import MongoClient
from flask_cors import CORS
import subprocess


app = Flask(__name__)

#client=MongoClient("mongodb+srv://sw2_fall22:password*123@cluster0.mp0jclc.mongodb.net/test")
#mongo = pymongo(app, uri="mongodb+srv://sw2_fall22:password*123@cluster0.mp0jclc.mongodb.net/test")


# app = Flask(__name__)
# app.config["MONGO_URI"] = "mongodb+srv://sw2_fall22:password*123@cluster0.mp0jclc.mongodb.net/test"
# mongo = PyMongo(app)

client = MongoClient('mongodb+srv://sw2_fall22:password*123@cluster0.mp0jclc.mongodb.net/test', 5000)
db=client['test']
#collection=client['flask_test']
flask_test = db.flask_test # <-- This is the collection within the  'test' db

@app.route("/")
def home_page():
    #online_users = mongo.db.users.find({"online": True})
    return "Hello word"

'''
THIS IS THE POST METHOD - IT USES 'insert_one' rather than 'post'

'''
@app.route("/add", methods=["POST", "GET"])
def add():

    if request.method == "POST":
        id = request.form.get("id_")
        data = request.form.get("data_")
        packet = {"id": id, "data": data}
        post_id = flask_test.insert_one(packet).inserted_id
        return render_template("./templates/index.html")#"Packet ID = " + str(packet['id']) #return the packet that we just uploaded
    return render_template("./index.html")

@app.route("/getall")
def get_all_packets():
    things = []
    for thing in flask_test.find():
        things.append(thing)
    return str(things)


@app.route("/get")
def get_packet(x=5):
    y = flask_test.find_one({"data": x})
    return str(y)


@app.route("/deleteall")
def delete_all_packets():
    flask_test.delete_many({})
    return "deleted all!"


@app.route("/sync",methods=["POST", "GET"])
def sync():
    src_data = request.form.get("srcdata_")
    dest_ip = request.form.get("ip_")
    dest_un = request.form.get("un_")
    dest_pw = request.form.get("pw_")
    dest_fldr = request.form.get("destfldr_")

    subprocess.run(['./rsync.sh', src_data, dest_ip,dest_un,dest_pw,dest_fldr], shell=False)
    return redirect('http://localhost:3000')
