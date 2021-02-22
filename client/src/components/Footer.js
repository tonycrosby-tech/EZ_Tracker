import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  root: {
    width: 100,
    backgroundColor: '#d3d3d3'
  },
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <h2>GitHub Repo</h2>
    <BottomNavigation
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
    showLabels
    className={classes.root}
  >
    <Link style={{ textDecoration: "none" }} href='https://github.com/tonycrosby-tech/EZ_Tracker' color='inherit'>
    <BottomNavigationAction label="Github Repo" icon={<GitHubIcon />} />
    </Link>
  </BottomNavigation>
    </div>
  );
}