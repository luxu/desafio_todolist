import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './../components/Home';
import NoMatch from './../components/NoMatch';
import TodoList from './../components/TodoList';
import TodoConcluidas from './../components/TodoConcluidas';
import TodoNaoConcluidas from './../components/TodoNaoConcluidas';

class Routes extends React.Component {
    render() {
        return (
          <main className="container">
              <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/todoList' component={TodoList}/>
                  <Route exact path='/todoConcluidas' component={TodoConcluidas}/>
                  <Route exact path='/todoNaoConcluidas' component={TodoNaoConcluidas}/>
                  <Route component={NoMatch} />
              </Switch>
          </main>
        )
    }
}

export default Routes
