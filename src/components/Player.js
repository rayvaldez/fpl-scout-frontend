import React from 'react';
import Team from './Team';


const Player = (props) => {

  let player = props.players.players[props.match.params.id]

  return(
    <div>
      {player ?
        <div>
          <img src={`http://resources.premierleague.com/premierleague/photos/players/110x140/p${player.photo.substring(0, player.photo.length-4)}.png`} alt={`${player.web_name}`}/>
          <h4>{player.first_name} {player.second_name}</h4>
          <Team team={player.team}/>
        </div>
      : <div>Loading...</div>}
    </div>
  )

}

export default Player
