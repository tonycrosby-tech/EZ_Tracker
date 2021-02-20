const { model, Schema } = require('mongoose');
// https://www.npmjs.com/package/passport-local-mongoose
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({});

User.plugin(passportLocalMongoose);

module.exports = model('User', User);
