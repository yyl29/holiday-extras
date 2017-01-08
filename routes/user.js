var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/users', function(req, res) {
  User.find(function(err, users) {
    if (err) {
      res.send(err);
    }
    res.json(users);
  });
});

router.get('/users/:user_id', function(req, res) {
  User.findById(req.params.user_id, function(err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
});

router.post('/users', function(req, res) {
  var newUser = new User(req.body);

  newUser.save(function(err) {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'User created!' });
    }
  });
});

module.exports = router;