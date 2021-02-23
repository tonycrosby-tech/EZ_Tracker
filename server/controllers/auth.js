const db = require('../models');

const login = async (req, res) => {
  res.json(req.user);
};

exports.login = login;

module.exports = {

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