import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Calendar from "react-calendar";
import { makeStyles } from "@material-ui/core/styles";
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import "react-calendar/dist/Calendar.css";

const columns = [
  {
    field: "id",
    headerName: "ID",
    description:
      "This column is for the id to keep count of your subscriptions.",
    sortable: false,
    width: 100,
    // valueGetter: (params) => `${params.getValue("id")}`,
  },
  {
    field: "name",
    headerName: "Name",
    description: "This column is for the name of your subscription.",
    sortable: false,
    width: 300,
    // valueGetter: (params) => `${params.getValue("name")}`,
  },
  {
    field: "price",
    headerName: "Price",
    description: "This column is for the price of your subscription.",
    sortable: false,
    width: 150,
    // valueGetter: (params) => `${params.getValue("price")}`,
  },
  {
    field: "expiration",
    headerName: "Expiration Date",
    description: "This column is for when your subscription expires.",
    sortable: false,
    width: 250,
    // valueGetter: (params) => `${params.getValue('expiration')}`,
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
    paddingTop: '56.25%', // 16:9
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
}));

const Subscription = () => {
  const [value, onChange] = useState(new Date());

  const classes = useStyles();

  return (
    <div>
    <h1>Subscriptions</h1>
    <Grid direction="column" justify="left">
      <div style={{ height: 300, width: "50%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={4}
          checkboxSelection
        />
      </div>
      </Grid>

      <div>
      <Grid direction="column" justify="left">
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
      </div>
    </div>
  );
};

export default Subscription;
