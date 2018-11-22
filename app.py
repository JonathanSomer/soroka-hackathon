from flask import Flask, render_template, request, redirect, url_for, send_from_directory, jsonify, json
from flask_pymongo import PyMongo
from logging.config import dictConfig
import os
from werkzeug.utils import secure_filename
from medical_classifier import MedicalObjectClassifier
from flask_cors import CORS

app = Flask(__name__, template_folder='')
CORS(app)
app.config["MONGO_URI"] = "mongodb://soroka-hackathon:a123456@ds247178.mlab.com:47178/heroku_6q3wqvtk"
app.config['UPLOAD_FOLDER'] = './images_for_classification'
mongo = PyMongo(app)

ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])


@app.route('/')
def home():
	return render_template('./client/dist/client/index.html')

@app.route('/client/dist/client/<path:path>')
def send_js(path):
    return send_from_directory('./client/dist/client/', path)

@app.route('/classify', methods=['POST'])
def classify_image():
	file_path = save_image(request)
	classifier = MedicalObjectClassifier()
	category = classifier.classify(file_path)
	os.remove(file_path)
	return map_category_to_response(category)



########################################################################
#
#						 PRIVATE
#
########################################################################

def save_image(request):
	image = request.files['image']
	filename = image.filename
	file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
	image.save(file_path)
	return file_path


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


CATEGORY_TO_RESPONSE = {
	'OxygenMask' : {
		'name' : 'OxygenMask', 
		'description' : 'When you breath through the mask you get more oxygen!', 
		'url' : "https://www.youtube.com/embed/oaZsvwfpOgM"
		},
	'Soap' : {
		'name' : 'Soap', 
		'description' : 'A magical substance which cleans stuff', 
		'url' : "https://www.youtube.com/embed/ee1WvpVypa4"
	},
	'BloodPressure' : {
		'name' : 'Blood Pressure Monitors', 
		'description' : '', 
		'url' : "https://www.youtube.com/embed/n1nN7eASrAs"
	},
	'Thermometer' : {
		'name' : 'Soap', 
		'description' : 'A magical substance which cleans stuff', 
		'url' : "https://www.youtube.com/embed/nZc_QknHP54"
	},
	'ECGElectrode' : {
		'name' : 'Soap', 
		'description' : 'A magical substance which cleans stuff', 
		'url' : "https://www.youtube.com/embed/ts_uCbPqXwM"
	}
}

def map_category_to_response(category):
	return jsonify(CATEGORY_TO_RESPONSE[category])
