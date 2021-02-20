// import React, { useState } from "react";
// import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
// import Link from "@material-ui/core/Link";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
// import API from "../utils/API";
 
// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.primary.main,
//   },
//   form: {
//     width: "90%", // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//     backgroundColor: "#00008b",
//     color: "white",
//   },
// }));

// export default function SignUp() {
//   const classes = useStyles();
//   const [formObject, setFormObject] = useState({});

//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     setFormObject({ ...formObject, [name]: value });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (formObject.user && formObject.email && formObject.password) {
//       API.saveUser({
//         username: formObject.user,
//         email: formObject.email,
//         password: formObject.password,
//       })
//         .then((res) => {
//           console.log(res);
//         })
//         .catch((err) => console.log(err));
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign up
//         </Typography>
//         <form className={classes.form} onSubmit={handleSubmit}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="username"
//                 label="Username"
//                 name="user"
//                 autoComplete="username"
//                 autoFocus
//                 onChange={handleInputChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="user"
//                 label="Email"
//                 name="email"
//                 autoComplete="email"
//                 onChange={handleInputChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//                 onChange={handleInputChange}
//               />
//             </Grid>
//             <Button type="submit" className={classes.submit} fullWidth>
//               Sign Up
//             </Button>
//             <Grid container justify="flex-end">
//               <Grid item>
//                 <Link href="/login" variant="body1">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Grid>
//         </form>
//         <Box mt={2} mb={2}>
//           <Copyright />
//         </Box>
//       </div>
//     </Container>
//   );
// }

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="#">
//         Subscription Tracker
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }


// import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import API from "../utils/API";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import './Login.css';

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.primary.main,
//   },
//   form: {
//     width: "90%", // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//     backgroundColor: "#00008b",
//     color: "white",
//   },
// }));
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      email: ''
    };
  }
  
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { email, username, password } = this.state;

    axios.post('http://localhost:3001/api/auth/register', { email, username, password })
      .then((result) => {
        console.log(result);
        this.props.history.push("/login")
      });
  }

  render() {
    const { email, username, password } = this.state;
    return (
      // <div className="container">
      //   <form className="form-signin" onSubmit={this.onSubmit}>
      //     <h2 className="form-signin-heading">Register</h2>
      //     <label htmlFor="inputPassword" className="sr-only">Username</label>
      //     <input type="username" className="form-control" placeholder="Username" name="username" value={username} onChange={this.onChange} required/>
      //     <label htmlFor="inputEmail" className="sr-only">Email address</label>
      //     <input type="email" className="form-control" placeholder="Email address" name="email" value={email} onChange={this.onChange} required/>
      //     <label htmlFor="inputPassword" className="sr-only">Password</label>
      //     <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
      //     <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
      //   </form>
      // </div>
          <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={this.onSubmit}>
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
                onChange={this.onChange} required
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
                onChange={this.onChange} required
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
                onChange={this.onChange} required
              />
            </Grid>
            <Button type="submit" fullWidth>
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body1">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
        {/* <Box mt={2} mb={2}>
          <Copyright />
        </Box> */}
      </div>
    </Container>

    );
  }
}

export default Signup;