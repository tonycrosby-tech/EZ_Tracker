import React, { useState } from "react";
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

function App() {
  const [auth, setAuth] = useState(null); // should be global state, probably context

  const isAuthenticated = !!auth;

  // if (!isAuthenticated) return <Redirect to="/" />;
  console.log(isAuthenticated);
  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route exact path="/login" component={SignInSide} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/home" component={Header} />
          <Route exact path="/subscription" component={Subscription} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/account" component={Account} />
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
