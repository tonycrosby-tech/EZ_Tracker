import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PieGraph from '../components/PieGraph';
import BarGraph from '../components/BarGraph';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 250,
  },
  graphs: {
    padding: theme.spacing(4),
    marginLeft: theme.spacing(0),
  },
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <>
      <Grid Grid container direction="row" justify="center">
        <Grid item xs={8}>
          <PieGraph />
        </Grid>
      </Grid>
      <Grid Grid container direction="row" justify="center">
      <Grid item xs={12} className={classes.graphs}>
          <BarGraph />
      </Grid>
      </Grid>
    </>
  );
}
