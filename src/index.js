import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import listReducer from './reducers/listReducer';
import itemsReducer from './reducers/itemsReducer';

//const rootReducer = combineReducers({listReducer, itemsReducer});

const store = createStore(itemsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);
