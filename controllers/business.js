let express = require('express');
let router = express.Router();
let mongoose = require('mongooose');

//create a reference to the model
let Business = require('../model/book');

module.exports.displayBusiness = (req, res, next) => {
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
                res.render('business/update', {title: 'Update Business Contact', business: businessToUpdate});
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
            res.redirect('/business');
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
            res.redirect('/business');
        }
    });
};