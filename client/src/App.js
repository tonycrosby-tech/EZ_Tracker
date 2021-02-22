import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import SignInSide from './pages/SignIn';
import Signup from './pages/Signup';
import Header from './components/Header';
import Subscription from './pages/Subscription';
import Navbar from './components/Navbar';
import NotFoundPage from './pages/NotFoundPage';
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route exact path="/home" component={Header} />
          <Route exact path="/login" component={SignInSide} />
          <Route exact path="/subs" component={Subscription} />
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
