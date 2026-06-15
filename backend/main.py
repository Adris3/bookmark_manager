from flask import request, jsonify
from config import app, db
from models import Bookmark

@app.route("/bookmarks", methods=["GET"])
# Establishes a route ("/bookmarks") and valid methods (GET)
# Since we only need to view the bookmarks at /bookmarks, GET is the only valid method here
def get_bookmarks():
    bookmarks = Bookmark.query.all() # Uses Flask SQLAlchemy (ORM) to get all of the bookmarks in the database and return them
    json_bookmarks = list(map(lambda x: x.to_json, bookmarks)) # Converts each bookmark object to json
    return jsonify({"bookmarks": json_bookmarks})

if __name__ == "__main__":
    # Creates all the defined models into the database upon start
    with app.app_context():
        db.create_all()

    app.run(debug=True)