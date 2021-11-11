import React from 'react';

const Team = (props) => {

  const renderTeam = (props) => {
    if (props.team === 1)
      return 'Arsenal';
    else if (props.team === 2)
      return 'Aston Villa';
    else if (props.team === 3)
      return 'Brentford';
    else if (props.team === 4)
      return 'Brighton';
    else if (props.team === 5)
      return 'Burnley';
    else if (props.team === 6)
      return 'Chelsea';
    else if (props.team === 7)
      return 'Crystal Palace';
    else if (props.team === 8)
      return 'Everton';
    else if (props.team === 9)
      return 'Leeds';
    else if (props.team === 10)
      return 'Leicester';
    else if (props.team === 11)
      return 'Liverpool';
    else if (props.team === 12)
      return 'Manchester City';
    else if (props.team === 13)
      return 'Manchester United';
    else if (props.team === 14)
      return 'Newcastle';
    else if (props.team === 15)
      return 'Norwich';
    else if (props.team === 16)
      return 'Southampton';
    else if (props.team === 17)
      return 'Tottenham Hotspur';
    else if (props.team === 18)
      return 'Watford';
    else if (props.team === 19)
      return 'West Ham';
    else if (props.team === 20)
      return 'Wolves';
    else
      return 'No Team Defined';
  }

  return (
    <div>
      <p>
        {renderTeam(props)}
      </p>
    </div>
  )
}

export default Team;
