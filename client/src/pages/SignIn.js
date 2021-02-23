import React, { Component } from "react";
import axios from "axios";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      message: "",
    };
  }
  
  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    axios
      .post("/api/auth/login",{ username, password })
      .then((res) => {
        this.setState({ message: "" });
        this.props.history.push("/home");
      })
      .catch((error) => {
        this.setState({
          message: "Login failed. Username or password do not match",
        });
      });
  };

  render() {
    const { username, password, message } = this.state;
    return (
      <Grid container component="main">
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} />
        <Grid item xs={12} sm={8} md={5} elevation={6}>
          <div>
            <Avatar>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form onSubmit={this.onSubmit}>
              {message !== "" && <p>{message}</p>}
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
                onChange={this.onChange}
                required
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
                onChange={this.onChange}
                required
              />
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/">Don't Have an Account? Sign up</Link>
                </Grid>
              </Grid>
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign In
              </Button>
              {/* <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid> */}
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
