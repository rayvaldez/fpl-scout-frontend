export default function commentReducer(state = {comments: []}, action ) {

  switch (action.type) {
    case 'FETCH_COMMENTS':
      return {comments: action.payload}
    case 'ADD_REPORT':
      return {...state, comments: [...state.comments, action.payload]}
    default:
      return state
  }
}
