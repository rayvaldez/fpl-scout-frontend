export default function commentReducer(state = {comments: []}, action ) {

  switch (action.type) {
    case 'FETCH_COMMENTS':
      return {comments: action.payload}
    default:
      return state
  }
}
