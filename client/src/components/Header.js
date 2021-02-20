import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "orange",
  },
  subtitle: {
    color: "#add8e6",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Typography className={classes.title} variant="h4">
        <Typed
          strings={["Welcome to the Subscription Tracker"]}
          typeSpeed={40}
        />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={["To get started", "Click the more info Button"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>

      <Link href="/about">
        <Button variant="contained" color="default">
          More Info
        </Button>
      </Link>
    </Box>
  );
};

export default Header;
