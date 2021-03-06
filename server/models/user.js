//Egor Shevchenko - 301084181. October 21, 2020

// require modules for the User Model

let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

// create a model class
let User = mongoose.Schema({
    username:
    {
        type: String,
        default: '',
        trim: true,
        required: 'Username is required'
    },
    /*
    password:
    {
        type: String,
        default: '',
        trim: true,
        required: 'Password is required'
    },
     */
    email:
    {
        type: String,
        default: '',
        trim: true,
        required: 'Email is required'
    },
    displayName:
    {
        type: String,
        default: '',
        trim: true,
        required: 'Display name is required'
    },
    created:
    {
        type: Date,
        default: Date.now
    },
    update:
    {
        type: Date,
        default: Date.now
    }
},
{
    collection: "user"
});

// configure our User Model
let options = ({missingPasswordError: 'Wrong / Missing Password'})

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User)