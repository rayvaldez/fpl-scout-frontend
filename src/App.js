import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Fantasy Premier League Scout</h1>
      </div>
    );
  }
}

export default App;
