import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import React, { Component } from 'react';
import axios from 'axios';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Copyright from '../components/Copyright';
import backgroundImage from './images/download.jpg';
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url("${backgroundImage}")`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '108vh'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#00008b',
  },
  form: {
    width: '90%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#00008b",
  },
  copyright: {
    marginTop: theme.spacing(6),
  },
});
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      email: '',
    };
  }

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { email, username, password } = this.state;

    axios
      .post('/api/auth/register', {
        email,
        username,
        password,
      })
      .then((result) => {
        this.props.history.push('/login');
      });
  };

  render() {
    const { classes } = this.props;
    const { email, username, password } = this.state;
    return (
      <div className={classes.image}>
      <Grid container component="main"
        className={classes.root}
        elevation={3}
      >
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image}/>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={this.onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  value={username}
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  onChange={this.onChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  value={email}
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  onChange={this.onChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  value={password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.onChange}
                  required
                />
              </Grid>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/login">Already have an Account? Sign In</Link>
                </Grid>
              </Grid>
              <Button
                className={classes.submit}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign Up
              </Button>
            </Grid>
          </form>
          <Box mt={4} mb={2}>
          <Copyright />
        </Box>
        </div>
      </Grid>
      </Grid>
      
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Signup);
