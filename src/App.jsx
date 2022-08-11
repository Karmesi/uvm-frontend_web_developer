import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Container,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import Login from './components/Login';
import Welcome from './components/Welcome';
import { UserContext } from './userDetails';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function App() {
  const { userName } = useContext(UserContext);
  const triggerLogOut = () => {
    localStorage.removeItem('userName');
    window.location.reload();
  };
  return (
    <Container maxWidth="lg">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <RoomServiceIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              noWrap
              href="/"
              variant="h6"
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Rancho Grande Inn
            </Typography>
            <Box sx={{
              flexDirection: 'row', flexGrow: 1,
            }}
            >
              <Link href="/weather" variant="button" underline="none" sx={{ margin: '0 2em' }}>
                <Typography noWrap color="white" component="span">Weather</Typography>
              </Link>
              {' '}
              |
              {' '}
              <Link href="/rooms" variant="button" underline="none" sx={{ margin: '0 2em' }}>
                <Typography noWrap color="white" component="span">Rooms</Typography>
              </Link>
              {' '}
              |
              {' '}
              <Link href="/mixology" variant="button" underline="none" sx={{ margin: '0 2em' }}>
                <Typography noWrap color="white" component="span">Mixology</Typography>
              </Link>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              { userName === ''
                ? <PersonOffIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                : <Button type="submit" onClick={triggerLogOut} variant="contained" disableElevation>Log out</Button>}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* eslint-disable-next-line no-nested-ternary */}
      { userName === ''
        ? <Login />
        : (
          window.location.pathname === '/' ? <Welcome /> : <Outlet />
        )}
    </Container>
  );
}
