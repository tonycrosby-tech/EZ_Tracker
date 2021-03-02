import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '../components/Typography';
import AboutLayout from './HomeLayout';
import Container from '@material-ui/core/Container';
import tony from './images/project3-TC.jpg';

const backgroundImage =
  'https://wallpaperplay.com/walls/full/a/5/0/164628.jpg';

const tonycrosbyImage = 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/25659359_1592018460891328_3469076148730558199_n.jpg?_nc_cat=110&ccb=3&_nc_sid=8bfeb9&_nc_ohc=GF_gdSH25hsAX8M5Wzt&_nc_ht=scontent-dfw5-1.xx&oh=3a1a6e7e2feb13f662ff13e74851cfcd&oe=6061862B'

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9',
    backgroundPosition: 'center',
    height: '100vh'
  },
  tony: {
    backgroundImage: `url('./pages/images/project3-TC.jpg')`,
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
    marginTop: theme.spacing(25),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
  root: {
    width: '35vh',
    justifyContent: 'center',
    display: 'flex',
    flexGrow: 1,
    marginTop: theme.spacing(2)
  },
  container: {
    justifyContent: 'center',
    display: 'flex',
    flexGrow: 1,
    marginTop: theme.spacing(2)
  },
  media: {
    height: '35vh',
    paddingTop: '56.25%', // 16:9
  },
  subtitle: {
    paddingTop: theme.spacing(5)
  }
});

function About(props) {
  const { classes } = props;

  return (
    <AboutLayout backgroundClassName={classes.background}>
      <Typography color="inherit" align="center" variant="h2" marked="center">
        About Us
      </Typography>
      <Typography className={classes.subtitle} color="inherit" align="center" variant="h5" marked="center">
        About Us
      </Typography>
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" className={classes.subtitle} variant="h5">
        Our Team
      </Typography>

      <Grid className={classes.container} spacing={2} >
        <Grid xs={12} item >
          <Card variant="outlined" className={classes.root}>
            <CardMedia
              className={classes.media}
              image={classes.tony}
            />
            <CardContent>
              <Typography>
                Tony Crosby
        </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} item >
          <Card variant="outlined" className={classes.root}>
            <CardMedia
              className={classes.media}
            />
            <CardContent>
              <Typography>
                Logan Pippin
        </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} item >
          <Card variant="outlined" className={classes.root}>
            <CardMedia
              className={classes.media}
            />
            <CardContent>
              <Typography>
                Parth Patel
        </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} item >
          <Card variant="outlined" className={classes.root}>
            <CardMedia
              className={classes.media}
            />
            <CardContent>
              <Typography>
                Mario Thompson
        </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </AboutLayout>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
