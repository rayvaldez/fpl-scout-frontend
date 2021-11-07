import React from 'react';
import Player from './Player';
import Table from './Table';

const Players = ({players}) => {

  const columns = React.useMemo(
    () => [
      {
        Header: 'Players',
        columns: [
          {
            Header: 'Name',
            accessor: 'web_name',
          },
          {
            Header: 'Cost',
            accessor: 'now_cost',
          },
          {
            Header: 'Position',
            accessor: 'element_type',
          },
          {
            Header: 'Team',
            accessor: 'team',
          },
          {
            Header: 'Influence',
            accessor: 'influence_rank'
          },
          {
            Header: 'Creativity',
            accessor: 'creativity_rank'
          },
          {
            Header: 'Threat',
            accessor: 'threat_rank'
          },
          {
            Header: 'ICT Rank',
            accessor: 'ict_index_rank'
          },
          {
            Header: 'Bonus',
            accessor: 'bonus'
          },
          {
            Header: 'Dream Team',
            accessor: 'dreamteam_count'
          },
          {
            Header: 'Total Points',
            accessor: 'total_points'
          },
        ],
      },
    ],
    []
  )

  return (
    <Table columns={columns} data={players.players} />
  )

}

export default Players
