import React from 'react';
import { connect } from 'react-redux';
import { fetchPlayers } from './actions/fetchPlayers';
import { fetchComments } from './actions/fetchComments';
import Players from './components/Players';
import Comments from './components/Comments';
import CommentsContainer from './containers/CommentsContainer';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchPlayers();
    this.props.fetchComments();
  }

  render() {
    return (
      <div className="App">
        <h1>Fantasy Premier League Scout</h1>
        {/*<Players players={this.props.players}/>*/}
        <CommentsContainer/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.players,
    comments: state.comments
  }
}

export default connect(mapStateToProps, {fetchPlayers, fetchComments})(App);
