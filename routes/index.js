var express = require('express');
var router = express.Router();

// Each route renders the shared layout with its own page content.
router.get('/', function (req, res, next) {
  res.render('layout', { title: 'Home', pageView: 'index' });
});

router.get('/about', function (req, res, next) {
  res.render('layout', { title: 'About Me', pageView: 'about' });
});

router.get('/projects', function (req, res, next) {
  res.render('layout', { title: 'Projects', pageView: 'projects' });
});

router.get('/contact', function (req, res, next) {
  res.render('layout', { title: 'Contact Me', pageView: 'contact' });
});

module.exports = router;
