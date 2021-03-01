import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import AboutLayout from './HomeLayout';

const backgroundImage =
  'https://wallpaperplay.com/walls/full/a/5/0/164628.jpg';

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
    marginTop: theme.spacing(10),
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
      <Typography color="inherit" align="center" variant="h2" marked="center">
        About Us
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
      about us info goes here!.
      </Typography>
    </AboutLayout>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
