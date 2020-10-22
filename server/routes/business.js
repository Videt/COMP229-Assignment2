//Egor Shevchenko - 301084181. October 21, 2020
let express = require ('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our user model
let Business = require('../models/business');

let businessController = require('../controllers/business');

/* GET route for the Business Contacts List page - READ Operation*/
router.get('/', businessController.displayBusiness);


/* GET route for displaying the Update page - CREATE Operation*/
router.get('/update/:id', businessController.displayUpdatePage);

/* POST route for processing the Update page - CREATE Operation*/
router.post('/update/:id', businessController.processUpdatePage);

/* GET to perform Deletion - DELETE Operation*/
router.post('/delete/:id', businessController.performDelete);

module.exports = router;