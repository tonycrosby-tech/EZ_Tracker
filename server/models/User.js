const { model, Schema } = require('mongoose');
const mongoose = require('mongoose');
// https://www.npmjs.com/package/passport-local-mongoose
const passportLocalMongoose = require('passport-local-mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  dateCreated: { type: Date, default: Date.now },

  subscriptions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Subscription',
    },
  ],
});

userSchema.plugin(passportLocalMongoose);

module.exports = model('User', userSchema);
