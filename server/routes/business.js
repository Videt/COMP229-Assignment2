//Egor Shevchenko - 301084181. October 21, 2020
let express = require ('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our user model
let Business = require('../models/business');

/* GET route for the Business Contacts List page - READ Operation*/
router.get('/', (req, res, next) => {
    Business.find((err, businessList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(businessList);

            res.render('business/list', {title: 'Business Contacts', businessList: businessList});
        }
    });
});


/* GET route for displaying the Update page - CREATE Operation*/
router.get('/update/:id', (req, res, next) => {
    let id = req.params.id;

    Business.findById(id, (err, businessToUpdate) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the update view
            res.render('business/update', {title: 'Update Business Contact', business: businessToUpdate});
        }
    });
});

/* POST route for processing the Update page - CREATE Operation*/
router.post('/update/:id', (req, res, next) => {
    let id = req.params.id

    let updatedBusiness = Business({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Business.updateOne({_id: id}, updatedBusiness, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the business list
            res.redirect('/business');
        }
    });
});

/* GET to perform Deletion - DELETE Operation*/
router.post('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    Business.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the business list
            res.redirect('/business');
        }
    });
});
module.exports = router;