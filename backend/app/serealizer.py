from flask_marshmallow import Marshmallow
from .model import Tarefa

ma = Marshmallow()

def configure(app):
    ma.init_app(app)

class TarefaSchema(ma.ModelSchema):
    class Meta:
        model = Tarefa
