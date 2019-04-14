from flask import Flask
from flask_migrate import Migrate
from .model import configure as config_db
from .serealizer import configure as config_ma
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///C://Users//luxu//Desktop//desafio//crudzin.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    config_db(app)
    config_ma(app)

    Migrate(app, app.db)

    from .tarefas import bp_tarefas
    app.register_blueprint(bp_tarefas)

    return app
