import React from 'react';
import PlayersContainer from './containers/PlayersContainer';
import Navigation from './components/Navigation';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navigation/>
        <PlayersContainer/>
      </div>
    );
  }
}

export default App;
