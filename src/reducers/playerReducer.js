export default function playerReducer(state = {players: []}, action) {
  console.log("action is", action.type);
  switch (action.type) {
    case 'FETCH_PLAYERS':
      return {players: action.payload}
    default:
      return state
  }
}
