import React, { useState, Component } from "react";
import {
  List,
  ListItem,
  IconButton,
  ListItemText,
  makeStyles,
  Drawer,
  Link,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const DrawerComponent = () => {
  const useStyles = makeStyles((theme) => ({
    drawerContainer: {
      background: "linear-gradient(45deg, #00008b 30%, #FF8E53 90%)",
      width: '25vh',
    },
    iconButtonContainer: {
      marginLeft: "auto",
      color: "white",
    },

    menuIconToggle: {
      fontSize: "1.5rem",
      marginLeft: "auto",
    },
    link: {
      color: 'white',
    }
  }));

  const [openDrawer, setOpenDrawer] = useState(false);

  const classes = useStyles();
  return (
    <>
      <Drawer
        anchor="left"
        classes={{ paper: classes.drawerContainer }}
        onClick={() => setOpenDrawer(false)}
        open={openDrawer}
        onSubmit={() => setOpenDrawer(true)}
      >
        <List>
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <Link
              style={{ textDecoration: "none" }}
              href="/home"
              color="inherit"
              className={classes.link}
            >
              <ListItemText> Home</ListItemText>
            </Link>
          </ListItem>
          <div>
            <ListItem divider button onClick={() => setOpenDrawer(false)}>
              <Link
                style={{ textDecoration: "none" }}
                href="/profile"
                color="inherit"
                className={classes.link}
              >
                <ListItemText> Profile</ListItemText>
              </Link>
            </ListItem>
          </div>

          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <Link
              style={{ textDecoration: "none" }}
              href="/about"
              color="inherit"
              className={classes.link}
            >
              <ListItemText> About</ListItemText>
            </Link>
          </ListItem>
        </List>
      </Drawer>
      {/* Since this is inside our toolbar we can push it to the end of the toolbar */}
      <IconButton
        className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.menuIconToggle} />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
