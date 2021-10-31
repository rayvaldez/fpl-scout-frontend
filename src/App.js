import React from 'react';
import { connect } from 'react-redux';
import { fetchPlayers } from './actions/fetchPlayers';
import { fetchComments } from './actions/fetchComments';
import Players from './components/Players';
import Comments from './components/Comments';
import PlayersContainer from './containers/PlayersContainer';
import CommentsContainer from './containers/CommentsContainer';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchComments();
  }

  render() {
    return (
      <div className="App">
        <h1>Fantasy Premier League Scout</h1>
        <PlayersContainer/>
        {/*<Players players={this.props.players}/>*/}
        <CommentsContainer/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps, { fetchComments })(App);
