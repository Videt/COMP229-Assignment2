// Egor Shevchenko - 301084181. October 8, 2020

let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about us page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});


/* GET products page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});


/* GET about us page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

/* GET business contact page. */
router.get('/business', function(req, res, next) {
  res.render('business', { title: 'Business Contact List' });
});

/* GET update page. */
router.get('/update', function(req, res, next) {
  res.render('update', { title: 'Update' });
});


module.exports = router;
