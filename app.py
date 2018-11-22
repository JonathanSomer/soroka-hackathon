from flask import Flask, render_template, request, redirect, url_for, send_from_directory
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
	return category



########################################################################

#						 PRIVATE

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
