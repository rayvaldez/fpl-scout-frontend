export function fetchComments() {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/comments')
    .then(response => response.json())
    .then(comments => dispatch({
      type: 'FETCH_COMMENTS',
      payload: comments
    }));
  };
}
