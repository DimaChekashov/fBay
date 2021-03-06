import React, { Component } from 'react';

import AppNavbar from './components/AppNavbar/AppNavbar';
import ShoppingList from './components/ShoppingList/ShoppingList';

import { Provider } from 'react-redux';
import store from './store';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <ShoppingList />
      </div>
      </Provider>
    );
  }
}

export default App;
