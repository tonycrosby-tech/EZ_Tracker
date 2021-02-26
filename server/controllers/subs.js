const db = require('../models');

module.exports = {
  findAll: function (req, res) {
    db.Subscription.find(req.query)
      .sort({ date: -1 })
      .then((dbModel = res.json(dbModel)))
      .catch((err = res.status(422).json(err)));
  },
  findById: function (req, res) {
    db.Subscription.findById(req.params.id)
      .then((dbSubs) => res.json(dbSubs))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Subscription.create(req.body)
      .then(({ _id }) =>
        db.User.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { subscriptions: _id } },
          { new: true }
        )
      )
      .then((dbUser) => {
        res.json(dbUser);
      })
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Subscription.findById({ _id: req.params.id })
      .then((dbSubs) => dbSubs.remove())
      .then((dbSubs) => res.json(dbSubs))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Subscription.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbSubs) => res.json(dbSubs))
      .catch((err) => res.status(422).json(err));
  },
};
