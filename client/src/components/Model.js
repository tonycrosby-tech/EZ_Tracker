import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
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

  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <form color="#212121">
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
              Value="subcription"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="Cost"
              label="Cost"
              name="price"
              Value="0"
              min="0"
              step=".01"
              variant="outlined"
              input
              type="number decimal"
              sufix="$"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <div>
              <Typography>start Date</Typography>
              <TextField
                id="Startdate "
                Value="Startdate "
                variant="outlined"
                input
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
                input
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
                    value={typeof value === 'number' ? value : 0}
                    onChange={handleSliderChange}
                    aria-labelledby="input-slider"
                  />
                </Grid>
                <Grid item>
                  <Input
                    className={classes.input}
                    value={value}
                    margin="dense"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                      step: 10,
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
