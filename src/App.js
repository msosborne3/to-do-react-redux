import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemsNew from './containers/ItemsNew';
import ListNew from './containers/ListNew';
import ListPage from './containers/ListPage';
import ItemsPage from './containers/ItemsPage';
import ListShow from './containers/ListShow';

class App extends Component {
  render() {
    return (
      <div className="App">

        <ListNew store={this.props.store} />
        <ListPage store={this.props.store} />
        

        <ItemsNew store={this.props.store} />
        <ItemsPage store={this.props.store} />

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
