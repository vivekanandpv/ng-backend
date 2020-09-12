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

router.get('/:id', function (req, res, next) {
  const id = req.params.id;
  res.send({
    name: 'Default User',
    age: 19,
    city: 'Bengaluru',
    id,
  });
});

router.post('/', function (req, res, next) {
  const item = req.body;
  res.send({
    item,
    message: 'Successful post',
  });
});

router.put('/:id', function (req, res, next) {
  const item = req.body;
  const id = req.params.id;
  res.send({
    item,
    message: 'Successful put',
    id,
  });
});

router.delete('/:id', function (req, res, next) {
  const id = req.params.id;
  res.send({
    message: 'Successful delete: ' + id,
  });
});

module.exports = router;
