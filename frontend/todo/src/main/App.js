import React from "react";
import {BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import MenuPrincipal from "../components/MenuPrincipal"

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <MenuPrincipal />
                    <Routes />
                </div>
            </Router>
        )
    }
}

export default App
