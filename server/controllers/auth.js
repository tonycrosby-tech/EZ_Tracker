const db = require('../models');
const passport = require('passport');

// const login = async (req, res) => {
//   res.json(req.user);
// };

// exports.login = login;

module.exports = {

  login:  (req, res) => {

    passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login', })(req, res);
  },

  logout: function (req, res) {
    try {
      req.logout();
      res.json({ "send to login": true });
    }
    catch (ex) {
      res.status(401).send({ success: false, msg: 'logout failed.' });
    }
  }
}  