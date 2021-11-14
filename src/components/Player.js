import React from 'react';
import Team from './Team';
import CommentsContainer from '../containers/CommentsContainer'

const Player = (props) => {

  let player = props.players.players[props.match.params.id]

  return(
    <div>
      {player ?
        <div>
          <img src={`http://resources.premierleague.com/premierleague/photos/players/110x140/p${player.photo.substring(0, player.photo.length-4)}.png`} alt={`${player.web_name}`}/>
          <h4>{player.first_name} {player.second_name}</h4>
          <Team team={player.team}/>
          <li>Cost - {player.now_cost}</li>
          <li>Points per game - {player.points_per_game}</li>
          <li>Total Points - {player.total_points}</li>
          <li>Goals - {player.goals_scored}</li>
          <li>Assists - {player.assists}</li>
          <li>Clean Sheets - {player.clean_sheets}</li>
          <li>Bonus Points - {player.bonus}</li>
        </div>
      : <div>Loading...</div>}

      <br/>

      <CommentsContainer /><br/>
    </div>
  )

}

export default Player
