import React, { useState } from "react";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import DrawerComponent from "./DrawerComponent";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import axios from "axios";

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
    background: "linear-gradient(45deg, #00008b 30%, #FF8E53 90%)",
  },
  toolbarTitle: {
    flexGrow: 1,
    color: "#FF8E53",
  },
  link: {
    margin: theme.spacing(1, 1),
    color: "white",
  },
  root: {
    flexGrow: 1,
    color: "black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "orange",
  },
  title: {
    flexGrow: 1,
    color: "orange",
  },
  Logout: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
  profileButton: {
    color: "#00008b",
  },
}));

const Navbar = function () {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .get("/api/auth/logout")
      .then((res) => {
        history.push("/");
      })
      .catch((error) => {
        console.error(error);
      });
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <DrawerComponent />
          <Typography variant="h6" className={classes.title} noWrap>
            EZ Tracker
          </Typography>

          {/* <Link
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
          </Link> */}
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
              {/* <Link style={{ textDecoration: "none" }} href="/profile">
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link> */}
              <Link style={{ textDecoration: "none" }} href="/profile">
                <MenuItem onClick={handleClose}>Profile</MenuItem>
              </Link>
              <Link style={{ textDecoration: "none" }} href="/subscription">
                <MenuItem onClick={handleClose}>Subscriptions</MenuItem>
              </Link>
              <Link style={{ textDecoration: "none" }} href="/logout">
                <MenuItem onClick={onSubmit}>Logout</MenuItem>
              </Link>
            </Menu>
            {/* <Button
                href="/logout"
                color="primary"
                variant="outlined"
                className={classes.Logout}
              >
                Logout
              </Button> */}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
