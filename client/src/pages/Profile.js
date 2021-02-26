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
    marginLeft: theme.spacing(10),
  },
}));

export default function Profile() {
  const classes = useStyles();

  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    loadSubscription();
    // loadBooks() // this would have loaded the books
  }, []);

  const loadSubscription = () => {
    axios
      .get('/api/auth/getAllSubs')
      .then((res) => {
        const subs = res.data.subscriptions;
        setSubscriptions(subs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Grid container justify='center'>
        <Grid item xs={4}>
          <PieGraph />
        </Grid>
        <Grid item xs={4} className={classes.graphs}>
          <BarGraph />
        </Grid>
      </Grid>
    </>
  );
}
