import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  message: {
    fontWeight: "bold",
    color: "black",
    textAlign: "center"
  }
  }));
  
  const Support = () => {
    const classes = useStyles();
  
    return (
      <Box className={classes.message}>
      <h1>Just a message</h1>
      <h1>Just a message</h1>
      <h1>Just a message</h1>
      <h1>Just a message</h1>
      <h1>Just a message</h1>
      </Box>
      
    );
  };
  
  export default Support;