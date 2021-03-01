import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Box from '@material-ui/core/Box';
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { relativeTimeRounding } from "moment";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "react-calendar/dist/Calendar.css";
import NewSubscription from "../components/Model";
import axios from "axios";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import CheckBox from "@material-ui/core/Checkbox";
import API from "../utils/API";
import ReactPlayer from "react-player";
import expoMailer from "../utils/expoMail";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    marginTop: theme.spacing(5),
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '345vh',
  },
  blue: {
    backgroundColor: '#00008b',
    padding: theme.spacing(2, 1, 2),
    marginLeft: theme.spacing(1),
  },
  title: {
    display: "flex",
    justifyContent: "center",
  },
  subCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
  },
  center1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#00008b',
  },
  root1: {
    maxWidth: 'auto',
    display: 'flex',
    alignItems: 'right',
    justifyContent: 'right',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoInput: {
    width: "50vh"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 3, 4),
  },
  button1: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 2, 1),
  },
  button2: {
    backgroundColor: '#00008b',
    border: '2px solid #000',
    hover: 'white',
    color: 'white',
  },
  playerwrapper: {
    paddingTop: "56.25%",
    position: "absolute",
    top: 'auto',
    left: 'auto',
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2)
  },

  reactplayer: {
    position: "absolute",
    top: 'auto',
    left: 'auto',
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2)
  },
}));

const Subscription = () => {
  const [value, onChange] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [subscriptions, setSubscriptions] = useState([]);
  const [url, setUrl] = useState();

  useEffect(() => {
    loadSubscription();
    expoMailer();

    // loadBooks() // this would have loaded the books
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const loadSubscription = () => {
    axios
      .get('/api/auth/getAllSubs')
      .then((res) => {
        const subs = res.data.subscriptions;
        setSubscriptions(subs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSubscription = (e) => {
    e.preventDefault();

    axios
      .get('/api/auth/getAllSubs')
      .then((res) => {
        const subs = res.data.subscriptions;
        setSubscriptions(subs);
        // for (let i = 0; i < subs.length; i++) {
        //   const element = subs[i];
        //   console.log(element);
        // }
        // setSubscription(element);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInput = (event) => {
    const url_link = event.target.value;
    const urlStringify = JSON.stringify(url_link);
    setUrl(urlStringify);
  };

  function deleteSubscription(id) {
    API.deleteSubs(id)
      .then((res) => loadSubscription())
      .catch((err) => console.log(err));
  }

  const classes = useStyles();

  return (
    <div>
      <Container component={Paper}>
      <h2 className={classes.title}>EZ Tracker - Subscriptions!</h2>
      <List className={classes.title}>
        <ListItemIcon onClick={handleOpen} className={classes.button1}>
          <AddCircleIcon />
          <ListItemText color="primary" primary="Add a new Subscription" />
        </ListItemIcon>
      </List>

      <List className={classes.title}>
        <TextField
          className={classes.videoInput}
          id="url"
          label="URL for video/song"
          name="url-link"
          fullWidth
          variant="outlined"
          placeholder="Video will play once url is in the input"
          onChange={handleInput}
        />
      </List>
      <Grid className={classes.root1} container direction="row" justify="center" alignItems="center">
        <Grid item xs>
          <div>
            {subscriptions.length ? (
              <div>
                <h1 className={classes.center1}>Subscriptions</h1>
                <TableContainer padding="checkbox">
                  <Table
                    className={classes.table}
                    aria-labelledby="tableTitle"
                    aria-label="enhanced table"
                  >
                    <TableHead>
                      <TableRow>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell>Cost</StyledTableCell>
                        <StyledTableCell>Rating</StyledTableCell>
                        <StyledTableCell>Start Date</StyledTableCell>
                        <StyledTableCell>Expiration Date</StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {subscriptions.map((sub) => (
                        <StyledTableRow>
                          <TableCell padding="checkbox">
                            <CheckBox color="primary" />
                          </TableCell>
                          <TableCell>{sub.SubscriptionName}</TableCell>
                          <TableCell>${sub.cost}</TableCell>
                          <TableCell>{sub.rating}</TableCell>
                          <TableCell>{sub.startDate}</TableCell>
                          <TableCell>{sub.expirationDate}</TableCell>
                          <TableCell>
                            {' '}
                            <Button
                              data-id={sub._id}
                              variant="contained"
                              color="inherit"
                              className={classes.button2}
                              onClick={() => deleteSubscription(sub._id)}
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            ) : (
              <h3 className={classes.title}>No Results to Display</h3>
            )}
          </div>
        </Grid>
      </Grid>
      
      <Grid container direction="row" justify="center" alignItems="center">
      <Box display={{ xs: 'block', xl: 'none' }}>
      <div className={classes.playerwrapper}>
        <ReactPlayer
          className={classes.reactplayer}
          height="50vh"
          width="50vh"
          url={url}
        />
      </div>
      </Box>
      </Grid>
      

      {/* <Grid container component="main">
          <Grid item xs
          className={classes.subCard}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    N
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Expiration for Netflix"
                subheader="February 21, 2020"
              />
              <Calendar onChange={onChange} value={value} />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Your Subscription is set to expire: Februrary 21, 2021
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid> */}

      <div>
        <Modal
          aria-labelledby="New Subscription"
          aria-describedby="new-subscription"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <NewSubscription />
            </div>
          </Fade>
        </Modal>
      </div>
      </Container>
    </div>
  );
};

export default Subscription;
