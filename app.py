from flask import Flask
from flask_pymongo import PyMongo
from logging.config import dictConfig

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://soroka-hackathon:a123456@ds247178.mlab.com:47178/heroku_6q3wqvtk"
mongo = PyMongo(app)

@app.route('/')
def hello_world():
	an_incrementing_number = mongo.db.number.find_one_and_update({ "_id" : "the only id" }, {"$inc" : { "number" : 1 }}, upsert=True)['number']
	return "A number which increments upon visiting this site: {}".format(an_incrementing_number)
