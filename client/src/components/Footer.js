import React, { Component } from 'react';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { spacing } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    color: '#FF8E53',
  },
  Logout: {
    height: 48,
    width: 100,
    margin: 8,
    color: 'white',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Any Question click the Button Below
            <Grid container justify="center" alignItems="center">
              © 2021 Copyright by
              <Button
                color="inherit"
                ml={2}
                className={classes.Logout}
                href="https://github.com/tonycrosby-tech"
              >
                Tony {''}
              </Button>
              <Button
                color="inherit"
                m={2}
                className={classes.Logout}
                href="https://github.com/parth167"
              >
                Parth
              </Button>
              <Button
                color="inherit"
                m={2}
                className={classes.Logout}
                href="https://github.com/LoganPippin"
              >
                Logan
              </Button>
              <Button
                color="inherit"
                m={2}
                className={classes.Logout}
                href="https://github.com/MarioThompson0010"
              >
                Mario
              </Button>
            </Grid>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
