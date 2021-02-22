const { model, Schema } = require('mongoose');
const mongoose = require('mongoose');


const subscriptionSchema = new Schema({
    
    name: {type: String, required: true, unique: false},
    cost: {type: Number, required: false, unique: false},
    satisfaction: {type: Number, required: false, unique: false},
    dateCreated: {type: Date, default: Date.now},
});

//const Book = mongoose.model("Book", bookSchema);
module.exports = model('Subscription', subscriptionSchema);