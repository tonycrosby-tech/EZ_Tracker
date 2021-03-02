import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import AboutLayout from './HomeLayout';

const backgroundImage =
  'http://i.huffpost.com/gen/2024910/images/o-CELL-PHONE-facebook.jpg';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9',
    backgroundPosition: 'center',
    height: '100vh'
  },
  button: {
    minWidth: 200,
    background: "#00008b",
    marginTop: theme.spacing(2),
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function About(props) {
  const { classes } = props;

  return (
    <AboutLayout backgroundClassName={classes.background}>
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h3" marked="center">
      Do you have trouble keeping track of your Subscriptions? Then this is the App for you!
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
      To create an Account get started by clicking the Register button or Login by clicking the Login button below to start tracking your Subscriptions!.
      </Typography>
      <Button
        color="inherit"
        variant="contained"
        size="medium"
        className={classes.button}
        component="a"
        href="/"
      >
        Register
      </Button>
      <Button
        color="inherit"
        variant="contained"
        size="medium"
        className={classes.button}
        component="a"
        href="/login"
      >
        Login
      </Button>
      <Button
        color="inherit"
        variant="contained"
        size="medium"
        className={classes.button}
        component="a"
        href="/subscription"
      >
        Subscriptions
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Start Tracking Today!
      </Typography>
    </AboutLayout>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
