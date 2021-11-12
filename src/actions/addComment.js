export const addComment = (comment, playerId) => {

  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/players/${playerId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comment)
    })
    .then(response => response.json())
    .then(comment => dispatch({type: 'ADD_REPORT', payload: comment}))
  }  
}
