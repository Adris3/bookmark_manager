from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# Configures application
# Building API first

app = Flask(__name__) # Initializes Flask application

CORS(app) # Now we can send Cross Origin Requests between frontend (bookmarker) and backend

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydatabase.db" # Specified location of local sqlite database
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app) # Create database instance that gives access to the database


