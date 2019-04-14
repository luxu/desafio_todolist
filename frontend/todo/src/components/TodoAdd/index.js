import React from "react";
import axios from "axios";

class TodoAdd extends React.Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  refreshPage = () => {window.location.reload()};

  handleSubmit = (event) => {
    event.preventDefault();
    let dados = {'description':this.state.text};
    axios.post(
      `http://localhost:5000/cadastrar`, dados
    )
    .then(res => {
        this.setState({ text: "" })
        this.refreshPage()
    })
    .catch(() => {
      console.log('Erro ao salvar os dados');}
    );
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <div className="form-control">
            <input
              className="form-control"
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
              placeholder="Digite aqui a nova tarefa..."
            />
          </div>
          <div className="form-control">
            <button
              className="btn btn-success"
              onClick={this.handleSubmit}
            >Adicionar Tarefa
            </button>
          </div>
        </form>
    );
  }
}

export default TodoAdd
