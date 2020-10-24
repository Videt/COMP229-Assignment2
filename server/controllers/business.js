//Egor Shevchenko - 301084181. October 25, 2020

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

//create a reference to the model
let Business = require('../models/business');

module.exports.displayBusiness = (req, res, next) => {
    Business.find((err, businessList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(businessList);

            res.render('business/list', {title: 'Business Contacts',
            businessList: businessList,
            displayName: req.user ? req.user.displayName : ''});
        }
    });
}

module.exports.displayUpdatePage = (req, res, next) => {
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
                res.render('business/update', {title: 'Update Business Contact',
                business: businessToUpdate,
                displayName: req.user ? req.user.displayName : ''});
            }
        });
    };

module.exports.processUpdatePage = (req, res, next) => {
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
            res.redirect('/business-list');
        }
    });
};

module.exports.performDelete = (req, res, next) => {
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
            res.redirect('/business-list');
        }
    });
}