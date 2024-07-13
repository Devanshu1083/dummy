import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

function RoomTable({ rooms }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Room No.</TableCell>
          <TableCell>Occupancy Availability</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rooms.map((room) => (
          <TableRow key={room.number}>
            <TableCell>{room.number}</TableCell>
            <TableCell>{room.occupancy}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default RoomTable;
