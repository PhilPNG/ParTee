from .app import db

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    phone_number = db.Column(db.String(20), unique=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    gender = db.Column(db.String(20))
    location_lat = db.Column(db.Float)
    location_lng = db.Column(db.Float)
    preferred_pace = db.Column(db.String(20))
    cart_preference = db.Column(db.String(20))
    round_length = db.Column(db.String(20))
    avg_score_par72 = db.Column(db.Integer)
    handicap_index = db.Column(db.Float)
    simulator_preference = db.Column(db.Boolean, default=False)
    portrait_url = db.Column(db.String(255))

    def __repr__(self):
        return f"<User {self.email}>"
