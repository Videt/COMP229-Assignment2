//Egor Shevchenko - 301084181. October 21, 2020
let mongoose = require('mongoose');

// create a model class
let businessModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: "business"
});

module.exports = mongoose.model('Business', businessModel)