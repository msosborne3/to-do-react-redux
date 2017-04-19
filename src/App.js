import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemsNew from './containers/ItemsNew';
import ListNew from './containers/ListNew';
import ListPage from './containers/ListPage';
import ItemsPage from './containers/ItemsPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemsNew />

        <ListPage />

        <ItemsPage />

        <h2>ListNew</h2>
        <ListNew />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
