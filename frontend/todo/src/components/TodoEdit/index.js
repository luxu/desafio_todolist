import React from "react";
import axios from "axios";

class TodoEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      description: '',
      inputValue: ''
    }
  };

  componentDidMount() {
    axios.get(`http://localhost:5000/get/` + this.state.id)
    .then(res => {
        this.setState({inputValue: res.data[0].description});
    })
    .catch((e) => {
      console.log('Erro ao pesquisar os dados', e);
    });
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  refreshPage = () => {window.location.reload()};

  handleSubmit = (event) => {
    event.preventDefault();
    let dados = {
      'description': this.state.inputValue,
    };
    axios.post(
      `http://localhost:5000/modificar/`+this.state.id,dados
    )
    .then(res => {
        this.refreshPage()
    })
    .catch((e) => {
      console.log('Erro ao modificar os dados', e);
    });
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <div className="form-control">
            <input
              className="form-control"
              name="text"
              value={this.state.inputValue}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-control">
            <button
              className="btn btn-success"
              onClick={this.handleSubmit}>Atualizar Tarefa
            </button>
          </div>
        </form>
    );
  }
}

export default TodoEdit
