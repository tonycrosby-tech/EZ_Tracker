// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import Link from '@material-ui/core/Link';

// const useStyles = makeStyles({
//   root: {
//     width: 100,
//     backgroundColor: '#d3d3d3'
//   },
// });

// export default function Footer() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   return (
//     <div>
//       <h2>GitHub Repo</h2>
//     <BottomNavigation
//     value={value}
//     onChange={(event, newValue) => {
//       setValue(newValue);
//     }}
//     showLabels
//     className={classes.root}
//   >
//     <Link style={{ textDecoration: "none" }} href='https://github.com/tonycrosby-tech/EZ_Tracker' color='inherit'>
//     <BottomNavigationAction label="Github Repo" icon={<GitHubIcon />} />
//     </Link>
//   </BottomNavigation>
//     </div>
//   );
// }

import React, { Component } from 'react';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    color: 'white',
    textAlign: 'center',
  },
  github: {
    height: '2.5vh',
    width: '5vh',
    margin: 4,
    color: 'white',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  footer: {
    top: 'auto',
    bottom: 0,
    backgroundColor: '#00008b',
    background: 'linear-gradient(45deg, #FF8E53 30%,  #00008b 90%)',
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <AppBar className={classes.footer} position="fixed" color="inherit">
      <Container maxWidth="md">
        <Toolbar>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} className={classes.title}>
              Any Question click the Button Below
            </Grid>
            <Button
              color="inherit"
              ml={2}
              className={classes.github}
              href="https://github.com/tonycrosby-tech"
            >
              Tony {''}
            </Button>
            <Button
              color="inherit"
              m={2}
              className={classes.github}
              href="https://github.com/parth167"
            >
              Parth
            </Button>
            <Button
              color="inherit"
              m={2}
              className={classes.github}
              href="https://github.com/LoganPippin"
            >
              Logan
            </Button>
            <Button
              color="inherit"
              m={2}
              className={classes.github}
              href="https://github.com/MarioThompson0010"
            >
              Mario
            </Button>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
