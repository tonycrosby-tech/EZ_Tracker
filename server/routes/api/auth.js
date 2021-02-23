const router = require('express').Router();
const User = require('../../models/User');
const Subscription = require('../../models/Subscription');
const passport = require('passport');
var parser = require('body-parser');
var urlencodedParser = parser.urlencoded({extended : false});
const authController = require('../../controllers/auth');
const isAuthenticated = require('../../config/middleware/isAuthenticated');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// api/auth/register
// input: email, username, password
// output: registered user, send back email and username, and id of user
router.post("/register", function (req, res) {

  Users = new User({ email: req.body.email, username: req.body.username });

  User.register(Users, req.body.password,  function (err, user) {
    if (err) {
      res.json({
        success: false, message: "Your account could  not be saved. You need a unique email probably: ", err
      });
    } else {
      res.json({
        user
      })
    }
  });
});

//api/auth/user/:id
// find user by id
// input: id
// output: one user
router.get('/user', isAuthenticated, function (req, res) {
  const ider = req.user.id;
  User.findById(ider)
    .then(user => res.json(user))
    .catch(err => res.status(439).json(err));
});

//api/auth/users  : all users
// input: nothing
// output: all users, no subscriptions
router.get('/users', isAuthenticated,  function (req, res) {
  const test = req.user;
  User.find(req.query)
    .then(user => res.json(user))
    .catch(err => res.status(439).json(err));

});

router.get('/getAllsubscriptions', isAuthenticated, function (req, res) {
  Subscription.find(req.query)
    .then(subscript => res.json(subscript))
    .catch(err => res.status(439).json(err));
});

// pass the user id in the uri and the subscription id in the body
// input: user id in uri and id of the subscription in the body
// output: deleted subscription id in the user document: note: this does not
// delete a subscription out of the subscription document
router.delete('/deleteSubscription',isAuthenticated,  function (req, res) {
  const ider = req.user.id;
  User.updateOne({ _id: ider }, { $pull: { subscriptions: req.body.subscription_id } }, function (err, result) {
    if (err) {
      res.status(401).send({ success: false, msg: 'Deletion failed. subscription not found.' });
    }
    else {
      res.json(result);
    }
  });
});

// api/auth/subscription--add a subscription
// this takes a username and a subscription, saves the subscription,
// and returns the username, email, and ids of the subscriptions that
//are attached to the user
// input: username and subscription you want to insert
// output: a new subscription with a pointer in the user document; you get 
// the user and the pointer(s) to the subscription(s)
router.post('/subscription', isAuthenticated, function (req, res) {
  const filter = { _id: req.user.id };

  Subscription.create(req.body.subscription)
    .then((result) =>
      User.findOneAndUpdate(filter,
        { $push: { subscriptions: result.id } }, { new: true }))

    .then((result) => {
      res.json(result);
    })
    .catch(err => res.status(439).json(err));
});

// creates a subscription without being tied to the user.
router.post('/addSubscription',isAuthenticated, function (req, res) {

  Subscription.create(req.body.subscription)

    .then((result) => {
      res.json(result);
    })
    .catch(err => res.status(439).json(err));
});

//api/auth/getAll--get all users and subscriptions
// get all users with pointers to subscriptions
router.get('/getAll',isAuthenticated, function (req, res) {

  User.find({})
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.json(err);
    })
});

// given the user id, get all of its subscriptions
// input: user id
// output: values of subscriptions
router.get('/getAllSubs/:id',isAuthenticated, function (req, res) {

  const ider = req.user.id;
  User.findOne({
    _id: ider
  })
    .populate('subscriptions')
    .then((result) => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});


//api/auth/getAllUsersAndSubscriptions--get all users and subscriptions
// given nothing, get all of the users and their subscriptions
// this will populate the subscriptions
router.get('/getAllUsersAndSubs',isAuthenticated, function (req, res) {

  User.find()
    .populate('subscriptions')
    .then((result) => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

//api/auth/updateSub with key of the subscription in the uri and the desired
// updated value of satisfaction
// input: key of the subscription and value of satisfaction we want to update to
// output: updated subscription
router.put('/updateSubSat/:id',isAuthenticated, function (req, res) {
  
  const setter = { satisfaction: req.body.satisfaction };
  Subscription.findOneAndUpdate({ _id: req.params.id }, setter,
    { returnOriginal: false }, (err, result) => {
      if (err) {
        res.status(439).json(err);
      }
      else {
        res.json(result);
      }
    });
});


//api/auth/updateSub with key of the subscription in the uri and the desired
// updated value of satisfaction
// input: id of subscription and value of cost
// output: updated subscription
router.put('/updateSubCost/:id',isAuthenticated, function (req, res) {
  const setter = { cost: req.body.cost };
  Subscription.findOneAndUpdate({ _id: req.params.id }, setter,
    { returnOriginal: false }, (err, result) => {
      if (err) {
        res.status(439).json(err);
      }
      else {
        res.json(result);
      }
    });
});

//api/auth/login
// input: username and password
// output: authenticated password and found username
router.post('/login', (req, res) => passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login', })(req, res));
// {
//   const { username, password } = req.body;

//   User.findOne({
//     username: req.body.username
//   }, function (err, user) {
//     if (err) {
//       res.status(500);
//     }

//     else if (!user) {
//      // res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
//       res.json({"send to login": true});
//     }
//     else {
//       //validPassword
//       console.log(user);
//       user.authenticate(req.body.password, (err, result) => {
//         if (err)
//           res.status(401).send({ success: false, msg: 'login failed.' });
//         else if (result === false)
//           res.status(401).send({ success: false, msg: 'login failed.' });
//         else
//           res.json(result);

//       });
//     }
//   });

// router.post()



  // findById: function(req, res) {
  //   db.Book
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
// });

// input: id of subscription and name of user
router.put('/addSubAlreadyExistToUser',isAuthenticated, function (req, res) {
  const filter = { _id: req.user.id };

  User.findOneAndUpdate(filter,
    { $push: { subscriptions: req.body.subscription } }, { new: true }
  )

    .then((result) => {
      res.json(result);
    })
    .catch(err => res.status(439).json(err));
});

// router.get('/logout', function(req, res) {
//   try{
//     req.logout();
//     res.json({"send to login" : true});
//     //res.json({"logged out successfully" : "true"});

//   }
//   catch(ex){
//     res.status(401).send({ success: false, msg: 'logout failed.' });
//   }
// });

router.route("/logout")
  .get(authController.logout);


module.exports = router;
