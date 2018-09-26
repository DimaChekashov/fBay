import React, { Component } from 'react';

import AppNavbar from './components/AppNavbar/AppNavbar';
import ShoppingList from './components/ShoppingList/ShoppingList';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <ShoppingList />
      </div>
    );
  }
}

export default App;
