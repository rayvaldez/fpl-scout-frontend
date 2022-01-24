import React from 'react';
import PlayersContainer from './containers/PlayersContainer';
import Navigation from './components/Navigation';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="logo-div">
        <img id="logo" src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Fantasy Scout"/>
        </div>
        <Navigation/>
        <PlayersContainer/>
      </div>
    );
  }
}

export default App;
