//Egor Shevchenko - 301084181. October 21, 2020
let express = require ('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let businessController = require('../controllers/business');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET route for the Business Contacts List page - READ Operation*/
router.get('/', businessController.displayBusiness);

/* GET route for displaying the Update page - UPDATE Operation*/
router.get('/update/:id', requireAuth, businessController.displayUpdatePage);

/* POST route for processing the Update page - UPDATE Operation*/
router.post('/update/:id', requireAuth, businessController.processUpdatePage);

/* GET to perform Deletion - DELETE Operation*/
router.get('/delete/:id', requireAuth, businessController.performDelete);

module.exports = router;