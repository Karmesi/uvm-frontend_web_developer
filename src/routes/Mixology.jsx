import React, { Fragment, useState } from 'react';
import {
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import {
  Button,
  CssVarsProvider,
  Sheet,
  TextField,
} from '@mui/joy';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import apisData from '../data/constants';

function fetchApiMixology(props) {
  const { query } = props;

  return fetch(
    apisData.mixology.search.replace('{{query}}', query),
  ).then((response) => response.json()).catch((error) => {
    console.error(error);
    return false;
  });
}

export default function Weather() {
  const [drinks, setDrinks] = useState([]);
  const [message, setMessage] = useState('');
  const [queryString, setQueryString] = useState('');
  async function getMyDrink() {
    await fetchApiMixology({ query: queryString }).then((response) => {
      if (response !== false) {
        if (response.drinks === null) {
          setDrinks([]);
          setMessage('Drinks not found. Try again');
        } else {
          setDrinks(response.drinks);
          setMessage('');
        }
      } else {
        setDrinks([]);
        setMessage('Drinks not found. Try again');
      }
    });
  }

  return (
    <Container fixed sx={{ marginTop: '1em' }}>
      <LocalBarIcon fontSize="large" sx={{ mr: 4 }} />
      <Typography variant="h2" component="span">Mixology</Typography>
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
            placeholder="Margarita"
            onChange={(e) => setQueryString(e.target.value)}
          />
          <Button sx={{ textAlign: 'center' }} onClick={() => getMyDrink()}>
            Get Drink recipes
          </Button>
        </Sheet>
        {drinks && drinks.map((drink, index) => (
          <Fragment key={drink.idDrink}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <img width={200} loading="lazy" src={drink.strDrinkThumb} alt={drink.strDrink} />
              </Grid>
              <Grid item xs={8}>
                <Grid container spacing={1}>
                  <Grid item xs={2}>
                    <Typography component="span">Name</Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography component="span">{ drink.strDrink }</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography component="span">Category</Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography component="span">{ drink.strCategory }</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography component="span">Alcoholic</Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography component="span">{ drink.strAlcoholic === 'Alcoholic' ? 'Yes' : 'No'}</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography component="span">Glass</Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography component="span">{ drink.strGlass }</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography component="span">Ingredients</Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Grid container spacing={1}>
                      {drink.strIngredient1 && (
                      <Grid item xs={12}>
                        <Typography component="span">{`${drink.strIngredient1}, ${drink.strMeasure1 === null ? 'as you wish' : drink.strMeasure1}`}</Typography>
                      </Grid>
                      )}
                      {drink.strIngredient2 && (
                      <Grid item xs={12}>
                        <Typography component="span">{`${drink.strIngredient2}, ${drink.strMeasure2 === null ? 'as you wish' : drink.strMeasure2}`}</Typography>
                      </Grid>
                      )}
                      {drink.strIngredient3 && (
                      <Grid item xs={12}>
                        <Typography component="span">{`${drink.strIngredient3}, ${drink.strMeasure3 === null ? 'as you wish' : drink.strMeasure3}`}</Typography>
                      </Grid>
                      )}
                      {drink.strIngredient4 && (
                      <Grid item xs={12}>
                        <Typography component="span">{`${drink.strIngredient4}, ${drink.strMeasure4 === null ? 'as you wish' : drink.strMeasure4}`}</Typography>
                      </Grid>
                      )}
                      {drink.strIngredient5 && (
                      <Grid item xs={12}>
                        <Typography component="span">{`${drink.strIngredient5}, ${drink.strMeasure5 === null ? 'as you wish' : drink.strMeasure5}`}</Typography>
                      </Grid>
                      )}
                      {drink.strIngredient6 && (
                      <Grid item xs={12}>
                        <Typography component="span">{`${drink.strIngredient6}, ${drink.strMeasure6 === null ? 'as you wish' : drink.strMeasure6}`}</Typography>
                      </Grid>
                      )}
                      {drink.strIngredient7 && (
                      <Grid item xs={12}>
                        <Typography component="span">{`${drink.strIngredient7}, ${drink.strMeasure7 === null ? 'as you wish' : drink.strMeasure7}`}</Typography>
                      </Grid>
                      )}
                      {drink.strIngredient8 && (
                      <Grid item xs={12}>
                        <Typography component="span">{`${drink.strIngredient8}, ${drink.strMeasure8 === null ? 'as you wish' : drink.strMeasure8}`}</Typography>
                      </Grid>
                      )}
                      {drink.strIngredient9 && (
                      <Grid item xs={12}>
                        <Typography component="span">{`${drink.strIngredient9}, ${drink.strMeasure9 === null ? 'as you wish' : drink.strMeasure9}`}</Typography>
                      </Grid>
                      )}
                      {drink.strIngredient10 && (
                      <Grid item xs={12}>
                        <Typography component="span">{`${drink.strIngredient10}, ${drink.strMeasure10 === null ? 'as you wish' : drink.strMeasure10}`}</Typography>
                      </Grid>
                      )}
                      {drink.strIngredient11 && (
                      <Grid item xs={12}>
                        <Typography component="span">{`${drink.strIngredient11}, ${drink.strMeasure11 === null ? 'as you wish' : drink.strMeasure11}`}</Typography>
                      </Grid>
                      )}
                      {drink.strIngredient12 && (
                      <Grid item xs={12}>
                        <Typography component="span">{`${drink.strIngredient12}, ${drink.strMeasure12 === null ? 'as you wish' : drink.strMeasure12}`}</Typography>
                      </Grid>
                      )}
                      {drink.strIngredient13 && (
                      <Grid item xs={12}>
                        <Typography component="span">{`${drink.strIngredient13}, ${drink.strMeasure13 === null ? 'as you wish' : drink.strMeasure13}`}</Typography>
                      </Grid>
                      )}
                      {drink.strIngredient14 && (
                      <Grid item xs={12}>
                        <Typography component="span">{`${drink.strIngredient14}, ${drink.strMeasure14 === null ? 'as you wish' : drink.strMeasure14}`}</Typography>
                      </Grid>
                      )}
                      {drink.strIngredient15 && (
                      <Grid item xs={12}>
                        <Typography component="span">{`${drink.strIngredient15}, ${drink.strMeasure15 === null ? 'as you wish' : drink.strMeasure15}`}</Typography>
                      </Grid>
                      )}
                    </Grid>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography component="span">Instructions</Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography component="span">{ drink.strInstructions }</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {drinks.length !== index + 1 && <Divider light sx={{ margin: '2em' }} />}
          </Fragment>
        ))}
        {message && <Typography component="span">{ message }</Typography>}
      </CssVarsProvider>
    </Container>
  );
}
