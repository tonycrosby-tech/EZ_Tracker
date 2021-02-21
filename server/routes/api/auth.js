const router = require('express').Router();
//const passport = require('../../config/passport');
//const mongojs = require("mongojs");
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
        success: false, message: "Your account could  not be saved. You need a unique email probably: ", err
      });
    } else {
      res.json({
        //success: true, message: "Your account has been saved"
        user
      })
    }
  });

});

//api/auth/user/:id
// find user by id
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

// pass the user id in the uri and the subscription id in the body
router.delete('/deleteSubscription/:id', function (req, res) {
  // const filter = { name: req.body.subscription_id };
  // const update = { ObjectId: null };

  User.updateOne({ _id: req.params.id }, { $pull: { subscriptions: req.body.subscription_id } }, function (err, result) {
    if (err) {
      //req.flash("error", "Uh Oh! Something went wrong.");
      //return res.redirect("/campgrounds");
      res.status(401).send({ success: false, msg: 'Deletion failed. subscription not found.' });
      //res.json(result);
    }
    else {
      // req.flash("success", "Comment has been deleted!");
      res.json(result);
      //res.status(203).send({ success: true, msg: 'deleted' });
    }
    // return res.json(campground);
  });

});

// api/auth/subscription--add a subscription
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
      // const { email, username, subscriptions } = result;
      res.json(result);
    })
    .catch(err => res.status(439).json(err));

});

//api/auth/getAll--get all users and subscriptions
router.get('/getAll', function (req, res) {

  User.find({})
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.json(err);
    })
});

//api/auth/getAll--get all users and subscriptions
router.get('/getAllSubs/:id', function (req, res) {

  User.findOne({
    username: req.body.username
  })
    .populate('subscriptions')
    .then((result) => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).json({ error });
    });

});

//api/auth/login
router.post('/login', function (req, res) {
  const { username, password } = req.body;
  User.findOne({
    username: req.body.username
    //password: req.body.password
  }, function (err, user) {
    if (err) {
      res.status(500);
    }

    else if (!user) {
      res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
    }
    else {
      //validPassword
      console.log(user);
      user.authenticate(req.body.password, (err, result) => {
        if (err)
          res.status(401).send({ success: false, msg: 'login failed.' });
        else if (result === false)
          res.status(401).send({ success: false, msg: 'login failed.' });
        else
          res.json(result);

      });
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