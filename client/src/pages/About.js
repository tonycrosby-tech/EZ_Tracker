// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 500,
//   },
//   media: {
//     height: 250,
//   },
// });

// export default function About() {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Welcome to EZ Tracker
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             EZ Tracker is an app that lets you manually input your
//             subscriptions, and balance, and expiration date to then alert a
//             notification to you when your subscription is about to expire.
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Link style={{ textDecoration: 'none' }} href="/" color="inherit">
//           <Button size="small" color="primary">
//             Signup
//           </Button>
//         </Link>
//         <Link style={{ textDecoration: 'none' }} href="/login" color="inherit">
//           <Button size="small" color="primary">
//             Login
//           </Button>
//         </Link>
//       </CardActions>
//     </Card>
//   );
// }
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
                    'EzTracker is the newest Subscription tracking app that lets you manually input your subscriptions, balance, and expiration date and It has charts  to help you manage your spending. it will alert a notification to you when your subscription is about to expire.',
                  ]}
                  typeSpeed={30}
                />
              </Typography>
              <Typography className={classes.subtitle} variant="h5">
                <Typed
                  strings={[
                    'You can create new Account by clicking signup button or simply click login to track your Subscription',
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
