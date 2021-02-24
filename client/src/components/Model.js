import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      width: 250,
    },
    input: {
      width: 42,
    },
  },
}));

const NewSubscription = () => {
  const classes = useStyles();

  const [rating, setRating] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleInputChange = (event, newValue) => {
    setRating(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (rating < 0) {
      setRating(0);
    } else if (rating > 100) {
      setRating(100);
    }
  };

  const [numObject, setNumObject] = useState();
  const [formObject, setFormObject] = useState();
  const [dateObject, setDateObject] = useState();

  const numInputChange = (event) => {
    const { name, value } = event.target;
    setNumObject({...numObject, [name]: Number.parseFloat(value)})
  };

  const getInputChange = (event) => {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: (value)})
  };
  
  const dateInputChange = (event) => {
    const {name, value} = event.target;
    setDateObject({...dateObject, [name]: (value)})
  };

  const handleFormSubmit = (event) =>  {
    event.preventDefault();

    const mergedObj = {...formObject, ...numObject, ...dateObject, rating: rating};
    console.log(mergedObj);
    axios.post("/api/auth/subscription", mergedObj)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };


  return (
    <Container component="main" maxWidth="xs">
      <form color="#212121" onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div>
              <Typography component="h1" variant="h5">
                Create New
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="Name"
              label="Subscription Name"
              name="SubscriptionName"
              Value="subcription"
              variant="outlined"
              onChange={getInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="cost"
              label="Cost"
              name="cost"
              Value="0"
              min="0"
              step=".01"
              variant="outlined"
              input
              onChange={numInputChange}
              type="number decimal"
              sufix="$"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <div>
              <Typography>Start Date</Typography>
              <TextField
                id="Startdate "
                Value="Startdate "
                variant="outlined"
                name="startDate"
                input
                onChange={dateInputChange}
                type="date"
                fullWidth
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div>
              <Typography>Renew Date</Typography>
              <TextField
                id="Renew date"
                Value="Renew date"
                variant="outlined"
                name="expirationDate"
                input
                onChange={dateInputChange}
                type="date"
                fullWidth
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.root}>
              <Typography id="input-slider" gutterBottom>
                Rating
              </Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    value={typeof rating === 'number' ? rating : 0}
                    onChange={handleSliderChange}
                    aria-labelledby="input-slider"
                    name="rating"
                  />
                </Grid>
                <Grid item>
                  <Input
                    className={classes.input}
                    value={rating}
                    margin="dense"
                    name="rating"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                      step: 1,
                      min: 0,
                      max: 100,
                      type: 'number',
                      'aria-labelledby': 'input-slider',
                    }}
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Create
          </Button>
        </Grid>
      </form>
    </Container>
  );
};
export default NewSubscription;
