import React,{ Component } from "react";
import axios from "axios";
import TodoAdd from "../TodoAdd";
import TodoEdit from "../TodoEdit";

import "./styles.css";

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items:[],
      foco:"Add",
      id:'',
    }
  };

  componentDidMount() {
      axios.get(`http://localhost:5000/mostrar`)
      .then(res => {
        if (res.data.length > 0)
        {
          this.setState({items: res.data});
        } else {
          this.setState({items: []})
        }
      })
      .catch(() => {console.log('Erro ao recuperar os dados');});
  }

  refreshPage = () => {window.location.reload()};

  onDelete = (id) => {
    console.log(id)
    axios.get(`http://localhost:5000/deletar/` + id)
    .then(res => {
      this.refreshPage()
    })
    .catch((e) => {
      console.log('Erro ao deletar os dados', e);
    });
  }

  onEdit = (id) => {
    console.log(id)
    this.setState({
      foco: "Edit",
      id: id,
    });
  }

  edit = (id) => {
    axios.get(`http://localhost:5000/modificar/` + id)
    .then(res => {
      this.refreshPage()
    })
    .catch((e) => {
      console.log('Erro ao deletar os dados', e);
    });
  }

  toggleComplete = (id,isComplete) => {
    let dados = {'isComplete':!isComplete};
    axios.post(
      `http://localhost:5000/modificar/` + id, dados
    )
    .then(res => {
      this.refreshPage()}
    )
    .catch((e) => {
      console.log('Erro ao modificar os dados', e);
    });
  };

  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">Lista de Tarefas</h1>
        {(this.state.foco === "Add")?<TodoAdd />
          :<TodoEdit id={this.state.id} />}
        <hr className="my-4" />
        <div>
            {this.state.items.map( (item) => {
                return (
                  <div key={item.id}>
                      <div
                        className = {item.isComplete ? "complete lead" : "lead"}
                        onClick={() => this.toggleComplete(item.id,item.isComplete)}
                      > {item.description}
                      </div>
                      <button className="btn btn-danger btn-sm"
                          onClick={() => this.onDelete(item.id)}>X
                      </button>
                      |
                      <button className="btn btn-warning btn-sm"
                          onClick={() => this.onEdit(item.id)}>0
                      </button>
                  </div>
                  )
                }
              )
            }
        </div>
     </div>
    )
  }
}
export default TodoList
