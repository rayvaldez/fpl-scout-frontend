import React from 'react';
import { connect } from 'react-redux';
import {fetchPlayers} from './actions/fetchPlayers';
import PlayersContainer from './containers/PlayersContainer';
import CommentsContainer from './containers/CommentsContainer';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchPlayers()
  }

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

const mapStateToProps = state => {
  return {
    players: state.players
  }
}

export default connect(mapStateToProps, {fetchPlayers})(App);
