import React from "react";
import {Link} from 'react-router-dom';

class MenuPrincipal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      links: [
        { route: "/", label: "Home"},
        { route: "/todoList", label: "Todas Tarefas"},
        { route: "/todoConcluidas", label: "Tarefas Concluídas"},
        { route: "/todoNaoConcluidas", label: "Tarefas Não Concluídas"},
      ]
    }
  };

  renderLink = () => {
        return this.state.links.map( link =>
          <Link
            key={link.route}
            className="nav-link"
            to={link.route}>
            {link.label}
          </Link>
        )
    }


  render () {
    return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav nav-pills">
                  { this.renderLink() }
              </ul>
            </div>
          </nav>
        )
  }
}

export default MenuPrincipal
