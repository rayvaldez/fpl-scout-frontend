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
