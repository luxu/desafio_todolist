from flask import Blueprint, current_app, request, jsonify
from .model import Tarefa
from .serealizer import TarefaSchema

bp_tarefas = Blueprint('tarefas',__name__)

@bp_tarefas.route('/mostrar', methods=['GET'])
def mostrar():
    bs = TarefaSchema(many=True)
    result = Tarefa.query.all()
    return bs.jsonify(result), 200

@bp_tarefas.route('/get/<identificador>', methods=['GET'])
def get(identificador):
    bs = TarefaSchema(many=True)
    query = Tarefa.query.filter(Tarefa.id == identificador)
    return bs.jsonify(query)

@bp_tarefas.route('/cadastrar', methods=['POST'])
def cadastrar():
    bs = TarefaSchema()
    tarefa, error = bs.load(request.json)
    current_app.db.session.add(tarefa)
    current_app.db.session.commit()
    return bs.jsonify(tarefa), 201

@bp_tarefas.route('/modificar/<identificador>', methods=['POST'])
def modificar(identificador):
    bs = TarefaSchema()
    query = Tarefa.query.filter(Tarefa.id == identificador)
    query.update(request.json)
    current_app.db.session.commit()
    return bs.jsonify(query.first())

@bp_tarefas.route('/deletar/<identificador>', methods=['GET'])
def deletar(identificador):
    Tarefa.query.filter(Tarefa.id == identificador).delete()
    current_app.db.session.commit()
    return jsonify('Deletado!!!!')
