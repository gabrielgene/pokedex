import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Pokedex from './telas/Pokedex';
import Pokemon from './telas/Pokemon';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Pokedex} />
          <Route path="/pokemon/:id" component={Pokemon} />
        </div>
      </Router>
    );
  }
}

export default App;
