import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(tags, status, coins, time) {
  return { tags, status, coins, time };
}

const rows = [
  createData('Study', 'success', 20, 24),
  createData('Games', 'failure', 0, 37),
  createData('Movies', 'success', 15, 24),
  createData('Reading', 'success', 30, 67),
  createData('Research', 'failure', 0, 49),
];

export default function History() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='text-center fw-bolder' style={{color: "#85ce14"}}>Tags</TableCell>
            <TableCell className='text-center fw-bolder' align="right" style={{color: "#85ce14"}}>Status</TableCell>
            <TableCell className='text-center fw-bolder' align="right" style={{color: "#85ce14"}}>Coins Earned</TableCell>
            <TableCell className='text-center fw-bolder' align="right" style={{color: "#85ce14"}}>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              className='text-center'
              key={row.tags}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className='text-center fw-bolder'>
                {row.tags}
              </TableCell>
              <TableCell align="right" style={{color: "white"}}  className={`${row.status === 'success' ? 'successStatus' : 'failureStatus'}`}>{row.status}</TableCell>
              <TableCell align="right" className='text-center'>{row.coins}</TableCell>
              <TableCell align="right" className='text-center'>{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
