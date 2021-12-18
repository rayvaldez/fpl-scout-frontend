import React from 'react';
import PlayersContainer from './containers/PlayersContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Fantasy Premier League Scout</h1>
        <PlayersContainer/>
      </div>
    );
  }
}

export default App;
