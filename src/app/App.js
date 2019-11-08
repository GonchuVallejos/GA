import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from '../views/Componentes/Navigation/Navigation'
import Footer from '../views/Componentes/Footer/Footer';
import Contenido from '../views/Componentes/Contenido/Contenido';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <header>
          < Navegacion />
        </header>
          < Contenido body = { children } />
          < Footer />
      </div>
    );
  }
}

export default App;