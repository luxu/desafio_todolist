import React from "react";
import axios from "axios";

class TodoNaoConcluidas extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items:[],
      todos:[]
    }
  };

  componentDidMount() {
    axios.get(
      `http://localhost:5000/mostrar`
    )
    .then(res => {
      if (res.data.length > 0) { this.setState({items: res.data});}
    })
    .catch(() => {
      console.log('Erro ao recuperar os dados');}
    );
  }

  render (){
    return (
      <div className="jumbotron">
        <h3 className="display-3">Falta(m) {this.state.items.filter(todo => !todo.isComplete).length} tarefa(s) a ser(em) concluída(s)</h3>
        <hr className="my-4" />
        {this.state.items.map( (item) => {
            return (
              <div key={item.id}>
                <h3>
                  {!item.isComplete ? item.description : null}
                </h3>
              </div>
            )
        })}
      </div>
    )
  }
}

export default TodoNaoConcluidas
