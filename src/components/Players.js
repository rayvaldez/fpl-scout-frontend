import React from 'react';

const Players = ({players}) => {

  return (
    <div>
      {players.map(player => <li key={player.id}>{player.first_name} {player.second_name} </li>)}
    </div>
  )
}

export default Players
