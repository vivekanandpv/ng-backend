var express = require('express');
var router = express.Router();
const adminToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlcyI6WyJhZG1pbiIsIm1hbmFnZXIiXX0.IpfJKVXKDJtGYDyPinTtyU5S0FWIX0-NGF4houP2lHE`;
const managerToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFqYXkgU2luZ2giLCJpYXQiOjE1MTYyMzkwMjIsInJvbGVzIjpbIm1hbmFnZXIiXX0.Hr9v_1R7Ei2KwQ42qX5s05AKQkYaAeywOheceChuAbw`;
const userToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlByYXNoYW50IiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlcyI6WyJjbGVyayIsInVzZXIiXX0.FFf9abh1LmAqsPUjuwPJb6OQ6m3LYsj8uiRzIqqqW_c`;

/* GET users listing. */
router.post('/login/admin', function (req, res, next) {
  res.send({
    token: adminToken,
  });
});

router.post('/login/manager', function (req, res, next) {
  res.send({
    token: managerToken,
  });
});

router.post('/login/user', function (req, res, next) {
  res.send({
    token: userToken,
  });
});

router.get('/resource/admin', function (req, res, next) {
  const token = req.header('Authorization')
    ? req.header('Authorization').split(' ')[1]
    : null;
  if (token === adminToken) {
    res.send({
      message: 'Admin resource',
    });
  } else {
    res.sendStatus(401);
  }
});

router.get('/resource/manager', function (req, res, next) {
  const token = req.header('Authorization')
    ? req.header('Authorization').split(' ')[1]
    : null;
  if (token === managerToken || token === adminToken) {
    res.send({
      message: 'Manager resource',
    });
  } else {
    res.sendStatus(401);
  }
});

router.get('/resource/user', function (req, res, next) {
  const token = req.header('Authorization')
    ? req.header('Authorization').split(' ')[1]
    : null;
  if (token === userToken) {
    res.send({
      message: 'User resource',
    });
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
