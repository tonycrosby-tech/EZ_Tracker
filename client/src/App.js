import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import SignInSide from './pages/SignIn';
import Signup from './pages/Signup';
import Header from './components/Header';
import About from './pages/About';
import Account from './pages/Account';
import Navbar from './components/Navbar';
import NotFoundPage from './pages/NotFoundPage';
import Contact from './pages/Contact';
import Support from './pages/Support';
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
          <Route exact path="/about" component={About} />
          <Route exact path="/account" component={Account}/>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/support" component={Support} />
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
