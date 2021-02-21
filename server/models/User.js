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
            ref: "Subscription"
        }
    ]

    // [
    //     {
    //       type: Schema.Types.ObjectId,
    //       ref: "Book"
    //     }
    //   ]


}



);

// userSchema.plugin(passportLocalMongoose);

// //I believe these are not used
// userSchema.methods.generateHash = function (password) {
//     return bcrypt.hash(password, bcrypt.genSalt(10), null);
// };
// // not used with latest mongoose. use authenticate instead (user.authenticate)
// userSchema.methods.validPassword = function(password) {
//   return bcrypt.compare(password, this.password);
// };

userSchema.plugin(passportLocalMongoose);

module.exports = model('User', userSchema);
