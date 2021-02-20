import React from 'react';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { Button } from '@material-ui/core';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    background: '#00008b',
  },
  toolbarTitle: {
    flexGrow: 1,
    color: '#FF8E53',
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: 'white',
  },
  root: {
    flexGrow: 1,
    color: 'black',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'white',
  },
  title: {
    flexGrow: 1,
    color: '#FF8E53',
  },
  Logout: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  profileButton: {
    color: 'white',
  },
}));

const Navbar = function () {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            EZ Tracker
          </Typography>
          <Link
              variant="button"
              color="textPrimary"
              href="/signup"
              className={classes.link}
            >
              Signup
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="/login"
              className={classes.link}
            >
              Login
            </Link>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                className={classes.profileButton}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <Link href="/profile">
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
                <Link href="/account">
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Link>
              </Menu>
              <Button
                href="/logout"
                color="primary"
                variant="outlined"
                className={classes.Logout}
              >
                Logout
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {/* <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            EZ Tracker
          </Typography>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="/"
              className={classes.link}
            >
              Home
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="/about"
              className={classes.link}
            >
              About
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="/contact"
              className={classes.link}
            >
              Contact
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="/support"
              className={classes.link}
            >
              Support
            </Link>
          </nav>
          <Button
            href="/login"
            color="primary"
            variant="outlined"
            className={classes.Logout}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar> */}
    </div>
  );
};

export default Navbar;
