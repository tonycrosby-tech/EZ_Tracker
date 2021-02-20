const router = require('express').Router();
const passport = require('../../config/passport');
const User = require('../../models/User');
const authController = require('../../controllers/auth');

router.post("/register", function(req, res) {
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

// // Matches with '/api/auth/login'
router.route('/login').post(authController.login);

module.exports = router;