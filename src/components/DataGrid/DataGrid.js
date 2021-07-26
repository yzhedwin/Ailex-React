
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'username',
    headerName: 'User Name',
    width: 150,
    editable: true,
  },
  {
    field: 'ip',
    headerName: 'IP Address',
    type: 'string',
    width: 150,
    editable: true,
  },
];

var rows = [
  { id: 1, username: 'Snow', ip: '123.123.1.123'},
  { id: 2, username: 'Lannister', ip:'111.111.111.111' },
];

export default function DataGridDemo() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
