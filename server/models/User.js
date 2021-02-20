const { model, Schema } = require('mongoose');
// https://www.npmjs.com/package/passport-local-mongoose
const passportLocalMongoose = require('passport-local-mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    email: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    dateCreated: {type: Date, default: Date.now}
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

userSchema.plugin(passportLocalMongoose);

module.exports = model('User', userSchema);
