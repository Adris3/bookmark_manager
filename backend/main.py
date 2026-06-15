from flask import request, jsonify
from config import app, db
from models import Bookmark

if __name__ == "__main__":
    # Creates all the defined models into the database upon start
    with app.app_context():
        db.create_all()

    app.run(debug=True)