from config import db

class Bookmark(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(80), unique = False, nullable = False)
    link = db.Column(db.String(120), unique = True, nullable = False)

    def to_json(self):
