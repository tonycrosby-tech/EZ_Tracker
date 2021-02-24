import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import SignInSide from "./pages/SignIn";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Subscription from "./pages/Subscription";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Account from "./pages/Settings";
import ProtectedRoute from "./utils/PrivateRoute";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: true,
      username: null
    }
  }
  //   this.updateUser = this.updateUser.bind(this);
  //   this.getUser = this.getUser.bind(this);
  // }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get("/api/auth/user").then(response => {
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Signup} />
            <Route exact path="/login" component={SignInSide} />
            <Route
              exact
              path="/about"
              component={About}
            />
            <Route
              exact
              path="/contact"
              component={Contact}
            />
            <Route
              exact
              path="/home"
              component={Header}
            />
            <ProtectedRoute
              LoggedIn={this.state.loggedIn}
              path="/subscription"
              component={Subscription}
            />
            <ProtectedRoute
              LoggedIn={this.state.loggedIn}
              path="/profile"
              component={Profile}
            />
            <ProtectedRoute
              LoggedIn={this.state.loggedIn}
              path="/account"
              component={Account}
            />
            <Route path="*" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
          {/* <Footer /> */}
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
