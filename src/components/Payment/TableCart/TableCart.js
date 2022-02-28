import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TableCart({dataRows}) {
  let sum = 0;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell>Tên</TableCell>
            <TableCell align="left">Đơn Giá</TableCell>
            <TableCell align="left">Số lượng</TableCell>
            <TableCell align="left">Tổng</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataRows && dataRows.map((row,index) => {
            sum += row.price*row.uint;
            return(
              row.uint !== 0 &&
              <TableRow key={row.name + index}>
                <TableCell>{row.name}</TableCell>
                <TableCell align="left">{row.price}</TableCell>
                <TableCell align="left">{row.uint}</TableCell>
                <TableCell align="left">{row.price*row.uint}</TableCell>
              </TableRow>
            )
          })}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Tổng tiền</TableCell>
            <TableCell align="left">{sum}</TableCell>
          </TableRow>
         
   
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TableCart;