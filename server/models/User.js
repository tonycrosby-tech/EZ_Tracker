const { model, Schema } = require('mongoose');
const mongoose = require('mongoose');
// https://www.npmjs.com/package/passport-local-mongoose
const passportLocalMongoose = require('passport-local-mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    dateCreated: {type: Date, default: Date.now}
});

userSchema.plugin(passportLocalMongoose);


userSchema.methods.generateHash = function(password) {
  return bcrypt.hash(password, bcrypt.genSalt(10), null);
};
userSchema.methods.validPassword = function(password) {
  return bcrypt.compare(password, this.password);
};

userSchema.plugin(passportLocalMongoose);

module.exports = model('User', userSchema);
