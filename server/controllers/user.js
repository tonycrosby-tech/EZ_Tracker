const db = require('../models');
require('dotenv').config();
let nodemailer = require('nodemailer');

module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then((dbUser = res.json(dbUser)))
      .catch((err = res.status(422).json(err)));
  },
  findAllSubs: async (req, res) => {
    let foundUser = await db.User.find({ _id: req.params.id }).populate(
      'subscription'
    );
    res.json(foundUser);
  },
  findById: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User.create(req.body)
      .then((dbUser) => res.json(dbUser))
      .then(async function signUpMail() {
        try {
          const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'eztracker2@gmail.com',
              pass: 'SuperSecret12',
            },
          });

          let email = req.body.email.toString();

          const mailOptions = {
            from: 'EZTracker <eztracker2@gmail.com>',
            to: email,
            subject: 'Thanks For Singing Up!',
            text:
              'We really appreciate you, and think that your choice in subscription tracking apps was the right one we look forward to your continued use and enjoy. Thank You.',
          };

          const result = await transport.sendMail(mailOptions);
          return result;
        } catch (error) {
          console.error(error);
        }
      })

      .catch((err) => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then((dbUser) => dbUser.remove())
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
};
