import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
} from '@mui/material';
import {
  Button,
  CssVarsProvider,
  Sheet,
  TextField,
} from '@mui/joy';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import apisData from '../data/constants';

function fetchApiWeather(props) {
  const { query } = props;
  const today = new Date();

  return fetch(
    apisData.weather.search.replace('{{key}}', apisData.weather.key).replace('{{query}}', query).replace('{{date}}', today.toISOString().split('T')[0]),
  ).then((response) => response.json()).catch((error) => {
    console.error(error);
    return false;
  });
}

export default function Weather() {
  const [weather, setWeather] = useState({});
  const [message, setMessage] = useState('');
  const [queryString, setQueryString] = useState('');
  async function getWeather() {
    await fetchApiWeather({ query: queryString }).then((response) => {
      if (response !== false) {
        setWeather(response);
      } else {
        setWeather({});
        setMessage('Location not found. Try again');
      }
    });
  }

  return (
    <Container fixed sx={{ marginTop: '1em' }}>
      <ThermostatIcon fontSize="large" sx={{ mr: 4 }} />
      <Typography variant="h2" component="span">Weather</Typography>
      <CssVarsProvider>
        <Sheet
          sx={{
            maxWidth: 400,
            mx: 'auto',
            my: 4,
            py: 3,
            px: 2,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
        >
          <TextField
            name="query"
            type="text"
            placeholder="New York"
            onChange={(e) => setQueryString(e.target.value)}
          />
          <Button sx={{ textAlign: 'center' }} onClick={() => getWeather()}>
            Get Weather
          </Button>
        </Sheet>
      </CssVarsProvider>
      {weather && weather.resolvedAddress
        ? (
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Typography variant="h6" component="span">Location</Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography component="span">{ weather.resolvedAddress }</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6" component="span">Timezone</Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography component="span">{ weather.timezone }</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6" component="span">Description</Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography component="span">{ weather.description }</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6" component="span">Temperature</Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography component="span">{ `${weather.days[0].temp}° F` }</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6" component="span">Max Temperature</Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography component="span">{ `${weather.days[0].tempmax}° F` }</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6" component="span">Min Temperature</Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography component="span">{ `${weather.days[0].tempmin}° F` }</Typography>
            </Grid>
          </Grid>
        )
        : <Typography component="span">{ message }</Typography>}
    </Container>
  );
}
