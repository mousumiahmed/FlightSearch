from flask import Flask
from flask import request
import json
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from bson.json_util import dumps
app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/flightdb"
mongo = PyMongo(app)



@app.route('/lists')
def bookList():
    data = mongo.db.details.find()
    return dumps(data);

@app.route('/flightdetails')
def pages():
    from_city=request.args.get("originCity","originCity")
    to=request.args.get("destinationCity","destinationCity")
    departureDate=request.args.get("departureDate","departureDate")
    #sort_key=request.args.get("price","price")
    order_by = int(request.args.get("order",-1))
    list = mongo.db.details.find({"originCity":from_city,"destinationCity":to,"departureDate":departureDate}).sort("price",order_by)
    return dumps(list)