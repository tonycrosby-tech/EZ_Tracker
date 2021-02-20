// import React, { useState } from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="#">
//         Subscription Tracker
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: '100vh',
//   },
//   image: {
//     backgroundImage: 'url(https://source.unsplash.com/random)',
//     backgroundRepeat: 'no-repeat',
//     backgroundColor:
//       theme.palette.type === 'light'
//         ? theme.palette.grey[50]
//         : theme.palette.grey[900],
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   },
//   paper: {
//     margin: theme.spacing(8, 4),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.primary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function SignInSide() {
//   const classes = useStyles();

//   const [username, setUsername] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('username is ' + username);
//     console.log('email is ' + email);
//     console.log('password is ' + password);
//   };

//   return (
//     <Grid container component="main" className={classes.root}>
//       <CssBaseline />
//       <Grid item xs={false} sm={4} md={7} className={classes.image} />
//       <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <form className={classes.form} onSubmit={handleSubmit} noValidate>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="user"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Grid>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="username"
//               label="Username"
//               name="user"
//               autoFocus
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <Grid container justify="flex-end">
//               <Grid item>
//                 <Link href="/" variant="body1">
//                   Don't Have an Account? Sign up
//                 </Link>
//               </Grid>
//             </Grid>
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               onSubmit={handleSubmit}
//               className={classes.submit}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//             </Grid>
//             <Box mt={5}>
//               <Copyright />
//             </Box>
//           </form>
//         </div>
//       </Grid>
//     </Grid>
//   );
// }

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
// import './Login.css';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      message: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    axios.post('/api/auth/login', { username, password })
      .then((result) => {
        this.setState({ message: '' });
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ message: 'Login failed. Username or password do not match' });
      });
  }

  render() {
    const { username, password, message } = this.state;
    return (
      // <div class="container">
      //   <form class="form-signin" onSubmit={this.onSubmit}>
      //     {message !== '' &&
      //       <div class="alert alert-warning alert-dismissible" role="alert">
      //         { message }
      //       </div>
      //     }
      //     <h2 class="form-signin-heading">Please sign in</h2>
      //     <label for="inputEmail" class="sr-only">Email address</label>
      //     <input type="email" class="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
      //     <label for="inputPassword" class="sr-only">Password</label>
      //     <input type="password" class="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
      //     <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
      //     <p>
      //       Not a member? <Link to="/register"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Register here</Link>
      //     </p>
      //   </form>
      // </div>
          <Grid container component="main" >
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7}/>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div >
          <Avatar >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={this.onSubmit}>
            {message !== '' &&
              <p>{ message }</p>
          }
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              value={username}
              autoFocus
              onChange={this.onChange} required
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={password}
              id="password"
              autoComplete="current-password"
              onChange={this.onChange} required
            />
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/">
                  Don't Have an Account? Sign up
                </Link>
              </Grid>
            </Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            {/* <Box mt={5}>
              <Copyright />
            </Box> */}
          </form>
        </div>
      </Grid>
    </Grid>
    );
  }
}

export default Login;
