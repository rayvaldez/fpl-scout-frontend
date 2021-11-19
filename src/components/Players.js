import React from 'react';
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
            filter: 'fuzzyText',
            Cell: e =><a href={`/players/${e.row.id}`}> {e.value} </a>
          },
          {
            Header: 'Cost',
            accessor: 'now_cost',
            disableFilters: true,
          },
          {
            Header: 'Team',
            accessor: 'team',
            disableFilters: true,
          },
          {
            Header: 'Influence',
            accessor: 'influence_rank',
            disableFilters: true,
          },
          {
            Header: 'Creativity',
            accessor: 'creativity_rank',
            disableFilters: true,
          },
          {
            Header: 'Threat',
            accessor: 'threat_rank',
            disableFilters: true,
          },
          {
            Header: 'ICT Rank',
            accessor: 'ict_index_rank',
            disableFilters: true,
          },
          {
            Header: 'Bonus',
            accessor: 'bonus',
            disableFilters: true,
          },
          {
            Header: 'Dream Team',
            accessor: 'dreamteam_count',
            disableFilters: true,
          },
          {
            Header: 'Total Points',
            accessor: 'total_points',
            disableFilters: true,
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
