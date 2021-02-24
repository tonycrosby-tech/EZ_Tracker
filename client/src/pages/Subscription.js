import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Calendar from 'react-calendar';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import 'react-calendar/dist/Calendar.css';
import NewSubscription from '../components/Model';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Paper from '@material-ui/core/Paper';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    description:
      'This column is for the id to keep count of your subscriptions.',
    sortable: false,
    width: 100,
  },
  {
    field: 'name',
    headerName: 'Name',
    description: 'This column is for the name of your subscription.',
    sortable: false,
    width: 150,
  },
  {
    field: 'price',
    headerName: 'Price',
    description: 'This column is for the price of your subscription.',
    sortable: false,
    width: 150,
  },
  {
    field: 'startDate',
    headerName: 'Start Date',
    description: 'This column is for when your subscription starts.',
    sortable: false,
    width: 250,
  },
  {
    field: 'expiration',
    headerName: 'Expiration Date',
    description: 'This column is for when your subscription expires.',
    sortable: false,
    width: 250,
  },
];

const rows = [
  { id: 1, name: 'Netflix', price: '$9.99', expiration: '2/21/2021', startDate: '2/21/2021' },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  root1: {
    maxWidth: 900,
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
    padding: theme.spacing(2, 3, 4),
  },
}));

const Subscription = () => {
  const [value, onChange] = useState(new Date());
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <h1>Hello, User</h1>
          <h1>Subscriptions - Amount Spent: $0 </h1>
          <h3>Remaining Balance - $0</h3>
        </Grid>
      </Grid>
      <List className={classes.root}>
        <ListItem className={classes.button1}>
          <Button onClick={handleOpen}>
            <AddCircleIcon color="primary" />
          </Button>
          <ListItemText color="primary" primary="Add a new Subscription" />
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

        <Grid className={classes.root1} item xs>
          <Card> 
          <div style={{ height: 357, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={4}
              checkboxSelection
            />
          </div>
          </Card>
        </Grid>

        {/* <Grid className={classes.paper} item xs>
          <div style={{ height: 357, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={4}
              checkboxSelection
            />
          </div>
        </Grid> */}
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
          <NewSubscription />
            </div>
          </Fade>
        </Modal>
        </div>
      </div>
  );
};

export default Subscription;
