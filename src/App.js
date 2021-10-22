import React from 'react';
import { connect } from 'react-redux';
import PlayersContainer from './containers/PlayersContainer';
import CommentsContainer from './containers/CommentsContainer';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Fantasy Premier League Scout</h1>
        <PlayersContainer/>
        <CommentsContainer/>
      </div>
    );
  }
}

export default connect()(App);
