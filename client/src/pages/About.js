import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Typed from 'react-typed';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
  root: {
    height: '100vh',
  },
  backgroundImage: {},
  title: {
    color: 'orange',
    fontSize: 32,
  },
  subtitle: {
    color: '#00008b',
    fontSize: 24,
    marginTop: 15,
  },
  typedContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '70vw',
    textAlign: 'center',
    zIndex: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
  about: {
    background: 'linear-gradient(45deg, #00008b 30%, #FF8E53 90%)',
    color: 'white',
    marginLeft: 5,
    marginTop: 15,
  },
});

class About extends Component {
  constructor() {
    super();
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container className={classes.root} component="main">
          <div className={classes.image}>
            <Box className={classes.typedContainer}>
              <Typography className={classes.title} variant="h4">
                <Typed strings={['WELCOME TO EZ TRACKER 😄']} typeSpeed={40} />
              </Typography>

              <Typography className={classes.subtitle} variant="h5">
                <Typed
                  strings={[
                    'EzTracker is the newest subscription tracking app that lets you manually input your subscriptions--including balance and expiration date--and it has charts to help you manage your subscriptions.',
                  ]}
                  typeSpeed={30}
                />
              </Typography>
              <Typography className={classes.subtitle} variant="h5">
                <Typed
                  strings={[
                    'It will alert you by sending you a notification when your subscription is about to expire. You can create new account by clicking the  Signup button or simply click the Login button to track your Subscription',
                  ]}
                  typeSpeed={80}
                />
              </Typography>

              <Link href="/" color="inherit">
                <Button
                  variant="contained"
                  className={classes.about}
                  color="default"
                >
                  Signup
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  variant="contained"
                  className={classes.about}
                  color="default"
                >
                  Login
                </Button>
              </Link>
            </Box>
          </div>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(About);
