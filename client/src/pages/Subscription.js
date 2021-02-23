import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Calendar from "react-calendar";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import API from '../utils/API';

const columns = [
  {
    field: "id",
    headerName: "ID",
    description:
      "This column is for the id to keep count of your subscriptions.",
    sortable: false,
    width: 100,
  },
  {
    field: "name",
    headerName: "Name",
    description: "This column is for the name of your subscription.",
    sortable: false,
    width: 300,
  },
  {
    field: "price",
    headerName: "Price",
    description: "This column is for the price of your subscription.",
    sortable: false,
    width: 150,
  },
  {
    field: "expiration",
    headerName: "Expiration Date",
    description: "This column is for when your subscription expires.",
    sortable: false,
    width: 250,
  },
];

const rows = [
  { id: 1, name: "Netflix", price: "$9.99", expiration: "2.21.2021" },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Subscription = () => {
  const [value, onChange] = useState(new Date());
  const [open, setOpen] = React.useState(false);
  const [numObject, setNumObject] = useState();
  const [formObject, setFormObject] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const numInputChange = (event) => {
    const { name, value } = event.target;
    setNumObject({...numObject, [name]: Number.parseFloat(value)})
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: (value)})
  };

  const newArr = [];

res.render("/");

  const handleFormSubmit = (event) =>  {
    event.preventDefault();
    console.log(formObject);
    console.log(numObject);
    axios.post("/api/auth/subscription")
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const classes = useStyles();

  return (
    <div>
      <h1>Hello, User</h1>
      <h1>Subscriptions - Amount Spent: $0 </h1>
      <h3>Remaining Balance - $0</h3>
      <List className={classes.root}>
        <ListItem>
          <Button onClick={handleOpen}>
            <AddCircleIcon />
          </Button>
          <ListItemText primary="Add a new Subscription" />
        </ListItem>
      </List>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs>
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

        <Grid item xs>
          <div style={{ height: 600, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={6}
              checkboxSelection
            />
          </div>
        </Grid>
      </Grid>

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
              <h2 id="NewSubscription">New Subscription</h2>
              <p id="new-subscription">
                To create a new Subscription please enter the details below.
              </p>
              <form>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="subscription-name"
                label="Subscription Name"
                name="SubscriptionName"
                autoFocus
                onChange={handleInputChange}
                required
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="subscription-cost"
                label="Subscription Cost"
                name="cost"
                autoFocus
                onChange={numInputChange}
                required
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="subscription-rating"
                label="Subscription Rating"
                name="satisfaction"
                autoFocus
                onChange={numInputChange}
                required
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="subscription-expire"
                label="Subscription Expire Date"
                name="expirationDate"
                autoFocus
                onChange={numInputChange}
                required
              />
              <button type="submit"
                variant="contained" color="primary" onClick={handleFormSubmit}>Submit</button>
              </form>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};

export default Subscription;
