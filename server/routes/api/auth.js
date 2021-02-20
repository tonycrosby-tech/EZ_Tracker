const router = require('express').Router();
//const passport = require('../../config/passport');
const User = require('../../models/User');
const authController = require('../../controllers/auth');
const isAuthenticated = require('../../config/middleware/isAuthenticated');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// api/auth/register
router.post("/register",  function(req, res) {
    if (!req.body.username || !req.body.password || !req.body.email) {
        res.json({success: false, msg: 'Please pass username and password.'});
    } else {
        var newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        });
        // save the user
        newUser.save(function(err) {
          if (err) {
            return res.json({success: false, msg: 'Account already exists.'});
          }
          res.json({success: true, msg: 'Successful created new account.'});
        });
    }
});

router.post('/login', function(req, res) {
  const { username, password } = req.body;
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) 
    {
      res.status(500);
    }

    else if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    }
    else
    {
      //validPassword
      // console.log(user);
      // //user.validPassword(password, (err, same)  => {
      //   if (err)
      //   {
      //     res.status(500);
      //   }
      //   else if (!same) 
      //   {
      //     res.status(401).json('incorrect email or password');
      //   }
      //   const { payload } = username;
      //   const token = jwt.sign(payload, secret, {
      //     expiresIn: '1h'
      //   });
      //   res.cookie('token', token, { httpOnly: true }).sendStatus(200);
      //})
      const { password, ...userloc } = user;
      res.json(userloc);
      //res.json(user);
    }
  });
});

// Matches with '/api/auth/login'
// router.route('/login').post(authController.login);

module.exports = router;