import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DumbComponent from './components/DumbComponent';
import DumberComponent from './components/DumberComponent';
import ItemsNew from './containers/ItemsNew';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DumbComponent />
        <DumberComponent />
        <ItemsNew />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1>Hello!!</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
