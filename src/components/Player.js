import React from 'react';


const Player = (props) => {

  let player = props.players.players[props.match.params.id]

  return(
    <div>
      {player ?
        <div>
          <h4>{player.first_name} {player.second_name}</h4>
        </div>
      : <div>Loading...</div>}
    </div>
  )

}

export default Player
