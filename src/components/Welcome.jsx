import React, { useState, useContext } from 'react';
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
import apisData from '../data/constants';
import { UserContext } from '../userDetails';

function fetchApiUsers() {
  return fetch(apisData.users.list).then((response) => response.json()).catch((error) => {
    console.error(error);
  });
}

function fetchApiComments() {
  return fetch(apisData.comments.list).then((response) => response.json()).catch((error) => {
    console.error(error);
  });
}

export default function Welcome() {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const { userName } = useContext(UserContext);
  async function parseData() {
    await fetchApiUsers().then((response) => {
      setUsers(response);
    });
    await fetchApiComments().then((response) => {
      setComments(response);
    });
  }
  if (users.length === 0 || comments.length === 0) {
    parseData();
  }
  return (
    <Container fixed sx={{ marginTop: '1em' }}>
      <Typography noWrap variant="h2" component="span">{`Welcome ${userName}`}</Typography>
      <Box sx={{
        marginTop: '2em',
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        gridGap: '10px',
        gridAutoRows: 'minmax(10px, auto)',
      }}
      >
        <Typography noWrap variant="h4" component="span">Registered Users</Typography>
        <TableContainer sx={{ maxHeight: 400 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { users && users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{
        marginTop: '2em',
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        gridGap: '10px',
        gridAutoRows: 'minmax(10px, auto)',
      }}
      >
        <Typography noWrap variant="h4" component="span">Comments</Typography>
        <TableContainer sx={{ maxHeight: 400 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Comment</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { comments && comments.map((comment) => (
                <TableRow key={comment.id}>
                  <TableCell>{comment.name}</TableCell>
                  <TableCell>{comment.email}</TableCell>
                  <TableCell>{comment.body}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}
