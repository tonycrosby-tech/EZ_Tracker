import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 250,
  },
});

export default function About() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Welcome to EZ Tracker
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            EZ Tracker is an app that lets you manually input your
            subscriptions, and balance, and expiration date to then alert a
            notification to you when your subscription is about to expire.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link style={{ textDecoration: "none" }} href="/" color="inherit">
          <Button size="small" color="primary">
            Signup
          </Button>
        </Link>
        <Link style={{ textDecoration: "none" }} href="/login" color="inherit">
          <Button size="small" color="primary">
            Login
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
