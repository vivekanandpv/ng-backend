var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send({
    name: 'Default User',
    age: 19,
    city: 'Bengaluru',
  });
});

module.exports = router;
