export function fetchPlayers() {
  return (dispatch) => {
    fetch('http://cors-anywhere.herokuapp.com/http://fantasy.premierleague.com/api/bootstrap-static/')
    .then(response => response.json())
    .then(data => dispatch({
      type: 'FETCH_PLAYERS',
      payload: data.elements
    }));
  };
}

  // fetch('http://localhost:3001/api/v1/players/')
  // .then(response => response.json())
  // .then(data => console.log(data))
// }
