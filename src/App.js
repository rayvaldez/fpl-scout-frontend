import React from 'react';
import PlayersContainer from './containers/PlayersContainer';
import CommentsContainer from './containers/CommentsContainer';
import './App.css';

class App extends React.Component {

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

export default App;
