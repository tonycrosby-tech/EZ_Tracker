const router = require('express').Router();
const User = require('../../models/User');
const Subscription = require('../../models/Subscription');
const passport = require('passport');
var parser = require('body-parser');
var urlencodedParser = parser.urlencoded({ extended: false });
const authController = require('../../controllers/auth');
const isAuthenticated = require('../../config/middleware/isAuthenticated');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../../models');
const signUpMailer = require('./signUpMail');

// api/auth/register
// output: registered user, send back email and username, and id of user
router.post('/register', function(req, res) {
  signUpMailer(req.body.email);

  Users = new User({ email: req.body.email, username: req.body.username });

  User.register(Users, req.body.password, function(err, user) {
    if (err) {
      console.log(err);
      res.json({
        success: false,
        message:
          'Your account could not be saved. You need a unique email probably: ',
        err,
      });
    } else {
      res.json({
        user,
      });
    }
  });
});

//api/auth/user/:id
// find user by id
// input: id
// output: one user

// router.get("/user/:id", function(req, res) {
//   const ider = req.user.id;
//   User.findOne(ider)
//     .then((user) => res.json(user))
//     .catch((err) => res.status(439).json(err));
// });

router.get('/user', isAuthenticated, (req, res) => {
  User.find(req.username);
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

//api/auth/users  : all users
// input: nothing
// output: all users, no subscriptions

router.get('/users', isAuthenticated, function(req, res) {
  const test = req.user;
  User.find(req.query)
    .then((user) => res.json(user))
    .catch((err) => res.status(439).json(err));
});

// get all subscriptions not attached to any user
router.get('/getAllsubscriptions', isAuthenticated, function(req, res) {
  Subscription.find(req.query)
    .then((subscript) => res.json(subscript))
    .catch((err) => res.status(439).json(err));
});

// pass the subscription id in the body
// input: subscription id in the body
// output: deleted subscription id in the user document: note: this does deletes both the
// pointer and subscription record
// {
//   "subscription_id": "603534a5aeb8367228ef6ff4"
// }
router.delete('/deleteSubscription/:id', isAuthenticated, function(req, res) {
  const ider = req.user.id;

  Subscription.deleteOne({ _id: req.params.id }, function(err) {
    if (err) {
      res.status(401).send({
        success: false,
        msg: 'Deletion failed. subscription not found.',
      });
    } else {
      User.updateOne(
        { _id: ider },
        { $pull: { subscriptions: req.params.id } },
        function(err, result) {
          if (err) {
            res.status(401).send({
              success: false,
              msg: 'Deletion failed. subscription not found.',
            });
          } else {
            // now go delete actual subscription record
            res.json(result);
          }
        }
      );
    }
  });
});

// api/auth/subscription--add a subscription
// this takes a username and a subscription, saves the subscription,
// and returns the username, email, and ids of the subscriptions that
//are attached to the user
// input: subscription properties you want to insert  (see model for specifics)
// output: a new subscription with a pointer in the user document; you get
// the user and the pointer(s) to the subscription(s). Go to Robo3T to see new subscription
// {
//   "SubscriptionName": "wh7799at",
//   "startDate": "2021-02-05",
//   "cost": "50",
//   "expirationDate": "2021-02-22"
// }
router.post('/subscription', isAuthenticated, function(req, res) {
  const filter = { _id: req.user.id };

  Subscription.create(req.body)
    .then((result) =>
      User.findOneAndUpdate(
        filter,
        { $push: { subscriptions: result.id } },
        { new: true }
      )
    )

    .then((result) => {
      res.json(result);
    })
    .catch((err) => res.status(439).json(err));
});

// creates a subscription WITHOUT being tied to the user.
// Input: properties of the subscription
// {
//   "SubscriptionName" : "whatever",
//   "cost": 100,
//   "startDate": "2021-02-01",
//   "expirationDate": "2021-05-01"
// }
router.post('/addSubscription', isAuthenticated, function(req, res) {
  Subscription.create(req.body)

    .then((result) => {
      res.json(result);
    })
    .catch((err) => res.status(439).json(err));
});

//api/auth/getAll--get all users and subscriptions
// get all users with pointers to subscriptions
router.get('/getAll', isAuthenticated, function(req, res) {
  User.find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

//api/auth/getAll--get all users and subscriptions
// get all users with pointers to subscriptions
router.get('/getOneSub/:id', isAuthenticated, function(req, res) {
  Subscription.findOne({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

// given the user id, get all of its subscriptions
// input: none
// output: values of subscriptions
router.get('/getAllSubs', isAuthenticated, function(req, res) {
  const ider = req.user.id;
  User.findOne({
    _id: ider,
  })
    .populate('subscriptions')
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

//api/auth/getAllUsersAndSubscriptions--get all users and subscriptions
// given nothing, get all of the users and their subscriptions
// this will populate the subscriptions
router.get('/getAllUsersAndSubs', isAuthenticated, function(req, res) {
  User.find()
    .populate('subscriptions')
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

//api/auth/updateSub with key of the subscription in the uri and the desired
// updated value of satisfaction
// input: key of the subscription and value of satisfaction we want to update to
// output: updated subscription
// {
//   "satisfaction" : 39
// }
router.put('/updateSubSat/:id', isAuthenticated, function(req, res) {
  const setter = { satisfaction: req.body.satisfaction };
  Subscription.findOneAndUpdate(
    { _id: req.params.id },
    setter,
    { returnOriginal: false },
    (err, result) => {
      if (err) {
        res.status(439).json(err);
      } else {
        res.json(result);
      }
    }
  );
});

//api/auth/updateSub with key of the subscription in the uri and value of updated cost in the body
// input: id of subscription and value of cost
// output: updated subscription
// {
//   "cost" : 60
// }
router.put('/updateSubCost/:id', isAuthenticated, function(req, res) {
  const ider = req.params.id;
  const setter = { cost: req.body.cost };
  Subscription.findOneAndUpdate(
    { _id: ider },
    setter,
    { returnOriginal: false },
    (err, result) => {
      if (err) {
        res.status(439).json(err);
      } else {
        res.json(result);
      }
    }
  );
});

//api/auth/updateSubDateExp with key of the subscription in the uri and value of updated expiration date in the body
// input: id of subscription and value of cost
// output: updated subscription (expiration date)
// {
//   "expirationDate" : "2021-05-01"
// }
router.put('/updateSubDateExp/:id', isAuthenticated, function(req, res) {
  const ider = req.params.id;
  const setter = { expirationDate: req.body.expirationDate };
  Subscription.findOneAndUpdate(
    { _id: ider },
    setter,
    { returnOriginal: false },
    (err, result) => {
      if (err) {
        res.status(439).json(err);
      } else {
        res.json(result);
      }
    }
  );
});

// update all properties, except creation date, in one fell swoop
//input: id of subscription in params and values to update the subscription with in the body.
// {

//   "SubscriptionName": "newone",
//   "cost": "900",
//   "expirationDate": "2022-01-01",
//   "startDate": "2021-01-01"
// }
router.put('/updateAllPropsForOneSub/:id', isAuthenticated, function(req, res) {
  const ider = req.params.id;
  const setter = { $set: req.body };
  Subscription.findOneAndUpdate(
    { _id: ider },
    setter,
    { returnOriginal: false },
    (err, result) => {
      if (err) {
        res.status(439).json(err);
      } else {
        res.json(result);
      }
    }
  );
});

// SubscriptionName: {type: String, required: true, unique: false},
//     cost: {type: Number, required: false, unique: false},
//     // rating: {type: Number, required: false, unique: false},
//     dateCreated: {type: Date, default: Date.now},
//     expirationDate: {type: String, required:true},
//     startDate: {type: String, required:true},

//api/auth/login
// input: username and password
// output: authenticated password and found username
router.route('/login').post(authController.login);

// input: id of subscription
// {
//   "subscription": "60345e075b196f6a3414815b"
// }
router.put('/addSubAlreadyExistToUser', isAuthenticated, function(req, res) {
  const filter = { _id: req.user.id };

  User.findOneAndUpdate(
    filter,
    { $push: { subscriptions: req.body.subscription } },
    { new: true }
  )

    .then((result) => {
      res.json(result);
    })
    .catch((err) => res.status(439).json(err));
});

router.route('/logout').get(authController.logout);

// router.get("/", (req, res) => {
//   console.log("===== user!!======");
//   console.log(req.user);
//   if (req.user) {
//     res.json({ user: req.user });
//   } else {
//     res.json({ user: null });
//   }
// });

module.exports = router;
