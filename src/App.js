import React, { Component } from 'react';
import { Link } from 'react-router';
import { ConnectedRecipes } from './components/recipes/Recipes'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/recipes/new">Create Recipe </Link>
        <Link to="/ingredients/new">Create Ingredient </Link>
        <ConnectedRecipes />
      </div>
    );
  }
}

export default App;
