var express = require('express');
var router = express.Router();

/* GET Empresa. */
router.get('/', function(req, res, next) {
  res.send('Hola Empresa');
});
router.get('/', function(req, res, next) {
    res.render('index');
});

module.exports = router;
 