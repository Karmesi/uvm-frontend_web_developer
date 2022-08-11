import React, { useState } from 'react';
import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import KingBedIcon from '@mui/icons-material/KingBed';
import data from '../data/sample.json';

export default function Rooms() {
  const [rooms, setRooms] = useState(data.rooms);
  const updateStatus = (roomId) => {
    const tmpRooms = rooms.map((tmpRoom) => {
      if (tmpRoom.roomId === roomId) {
        return {
          ...tmpRoom,
          available: !tmpRoom.available,
        };
      }
      return { ...tmpRoom };
    });
    setRooms(tmpRooms);
  };
  return (
    <Container fixed sx={{ marginTop: '1em' }}>
      <KingBedIcon fontSize="large" sx={{ mr: 4 }} />
      <Typography variant="h2" component="span">Rooms</Typography>
      <Box sx={{ marginTop: '2em' }}>
        <TableContainer sx={{ maxHeight: 400 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align="center">Beds</TableCell>
                <TableCell align="center">Capacity</TableCell>
                <TableCell align="center">Has Balcony?</TableCell>
                <TableCell align="center">Is Available?</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { rooms && rooms.map((room) => {
                const bgColor = room.available ? 'white' : '#D5D0CF';
                return (
                  <TableRow key={room.roomId} sx={{ backgroundColor: bgColor }}>
                    <TableCell align="center">{`Single: ${room.beds.single}, Double: ${room.beds.double}, Queen: ${room.beds.queen}, King: ${room.beds.king}`}</TableCell>
                    <TableCell align="center">{room.capacity}</TableCell>
                    <TableCell align="center">{room.balcony ? 'Yes' : 'No'}</TableCell>
                    <TableCell onClick={() => updateStatus(room.roomId)} align="center">{room.available ? 'Yes' : 'No'}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}
