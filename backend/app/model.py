from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def configure(app):
    db.init_app(app)
    app.db = db

class Tarefa(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(255))
    isComplete = db.Column(db.Boolean, default=False)
