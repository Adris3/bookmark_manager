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

@app.route("/create_bookmark", methods=["POST"])
def create_bookmark():
    name = request.json.get("name")
    link = request.json.get("link")

    if not name or not link:
        return (
            jsonify({"message": "You must include a link and a name"}),
            400
            )
    # Make new bookmark and add to db
    new_bookmark = Bookmark(name=name, link=link)

    try:
        db.session.add(new_bookmark)
        db.session.commit()
    except Exception as e:
        return (jsonify({"message": str(e)}), 400)
    
    return (jsonify({"message": "Bookmark created!"}), 201)

if __name__ == "__main__":
    # Creates all the defined models into the database upon start
    with app.app_context():
        db.create_all()

    app.run(debug=True)