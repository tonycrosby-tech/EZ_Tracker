import React from "react";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { Button } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    background: "#00008b",
  },
  toolbarTitle: {
    flexGrow: 1,
    color: "#FF8E53",
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: "white",
  },
  root: {
    flexGrow: 1,
    color: "black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "white",
  },
  title: {
    flexGrow: 1,
    color: "#FF8E53",
  },
  Logout: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
  profileButton: {
    color: "white",
  },
}));

const Navbar = function () {
  const classes = useStyles();
  const theme = useTheme();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [openl, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
      {/* <FormGroup>
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
      </FormGroup> */}
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} noWrap>
            EZ Tracker
          </Typography>

          <Link
            variant="button"
            color="textPrimary"
            href="/"
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
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
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
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={openl}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              {["Home", "Profile", "Settings", "Logout"].map((text, index) => (
                <ListItem button key={text}>
                  <Link href='/'/>
                  <ListItemIcon>
                    {index % 2 === 0 ? <HomeIcon /> : <AccountBoxIcon /> }
                  </ListItemIcon>

                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Divider />
          </Drawer>
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
