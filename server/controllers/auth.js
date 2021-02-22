const db = require('../models');

const login = async (req, res) => {
  res.json(req.user);
};

exports.login = login;

// module.exports = {
//   findOne: function(req, res) {
//     db.User
//       .find(req.query)
//       .sort({ date: -1 })
//       .then(dbUser => res.json(dbUser))
//       .catch(err => res.status(422).json(err));
//   }
// }