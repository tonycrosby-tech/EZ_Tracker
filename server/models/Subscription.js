const { model, Schema } = require('mongoose');
const mongoose = require('mongoose');


const subscriptionSchema = new Schema({
    
    name: {type: String, required: true, unique: false},
    cost: {type: Number, required: false, unique: false},
    satisfaction: {type: Number, required: false, unique: false},
    dateCreated: {type: Date, default: Date.now},
    expirationDate: { type: Date, required: true },
});

//const Book = mongoose.model("Book", bookSchema);
module.exports = model('Subscription', subscriptionSchema);