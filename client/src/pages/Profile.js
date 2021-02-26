import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import PieGraph from '../components/PieGraph';
import BarGraph from '../components/BarGraph';
import Grid from '@material-ui/core/Grid';
// import ResponsivePlayer from '../components/ReactPlayer';

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

  return (
    <>
      {' '}
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Profile
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link style={{ textDecoration: 'none' }} href="#" color="inherit">
            <Button size="small" color="primary">
              Placeholder
            </Button>
          </Link>
        </CardActions>
        {/* <ResponsivePlayer /> */}
      </Card>
      <Grid container justify={'center'}>
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
