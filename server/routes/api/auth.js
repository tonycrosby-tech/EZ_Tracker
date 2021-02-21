const router = require('express').Router();
//const passport = require('../../config/passport');
const User = require('../../models/User');
const Subscription = require('../../models/Subscription');
const authController = require('../../controllers/auth');
const isAuthenticated = require('../../config/middleware/isAuthenticated');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// api/auth/register
router.post("/register", function (req, res) {


  Users = new User({ email: req.body.email, username: req.body.username });

  User.register(Users, req.body.password, function (err, user) {
    if (err) {
      res.json({
        success: false, message: "Your account could  not be saved.Error: ", err
      });
    } else {
      res.json({
        success: true, message: "Your account has been saved"
      })
    }
  });








  // if (!req.body.username || !req.body.password || !req.body.email) {
  //   res.json({ success: false, msg: 'Please pass username and password.' });
  // } else {
  //   var newUser = new User({
  //     email: req.body.email,
  //     username: req.body.username,
  //     password: req.body.password,
  //   });
  //   // save the user
  //   newUser.save(function (err) {
  //     if (err) {
  //       return res.json({ success: false, msg: 'Account already exists.' });
  //     }
  //     res.json({ success: true, msg: 'Successful created new account.' });
  //   });
  // }
});

//api/auth/user/:id
router.get('/user/:id', function (req, res) {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(439).json(err));
});

//api/auth/users  : all users
router.get('/users', function (req, res) {
  User.find(req.query)
    .then(user => res.json(user))
    .catch(err => res.status(439).json(err));

  // .find(req.query)
  // .sort({ date: -1 })
  // .then(dbModel => res.json(dbModel))
  // .catch(err => res.status(422).json(err));

});

// api/auth/subscription
// this takes a username and a subscription, saves the subscription,
// and returns the username, email, and ids of the subscriptions that
//are attached to the user
router.post('/subscription', function (req, res) {
  const filter = { username: req.body.username };

  Subscription.create(req.body.subscriptions)
    .then((result) =>
      User.findOneAndUpdate(filter,
        { $push: { subscriptions: result.id } }, { new: true }))

        .then((result) => {
      const {email, username, subscriptions} = result;
      res.json({email, username, subscriptions});
    })
    .catch(err => res.status(439).json(err));

});

//api/auth/getAll
router.get('/getAll', function (req, res) {

  User.find({})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  })
});


// app.get("/library", (req, res) => {
//   db.Library.find({})
//     .then(dbLibrary => {
//       res.json(dbLibrary);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });




//api/auth/login
router.post('/login', function (req, res) {
  const { username, password } = req.body;
  User.findOne({
    username: req.body.username
  }, function (err, user) {
    if (err) {
      res.status(500);
    }

    else if (!user) {
      res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
    }
    else {
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
      const { password, username, email } = user;
      res.json({ username, email });
      //res.json(user);
    }
  });



  // findById: function(req, res) {
  //   db.Book
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },



});

// Matches with '/api/auth/login'
// router.route('/login').post(authController.login);

module.exports = router;