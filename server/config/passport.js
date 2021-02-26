const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models');

// Telling passport we want to use a Local Strategy.
// In other words, we want login with a username/email and password
passport.use(User.createStrategy());

// In order to help keep authentication state across HTTP requests,
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Exporting our configured passport
module.exports = passport;
