let express = require ('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our user model
let User = require('../models/user');

/* GET route for the User List page - READ Operation*/
router.get('/', (req, res, next) => {
    User.find((err, userList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(UserList);

            res.render('user', {title: 'Users List', userList: userList})
        }
    });
});

module.exports = router;