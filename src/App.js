import React from 'react';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/players/')
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        <h1>Fantasy Premier League Scout</h1>
      </div>
    );
  }
}

export default App;
