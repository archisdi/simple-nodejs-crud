'use strict';

var mongoose = require('mongoose'),
Person = mongoose.model('Person');

exports.index = function(req, res) {
  Person.find({}, function(err, person) {
    if (err)
      res.send(err);
    res.json(person);
  });
};

exports.store = function(req, res) {
  var newPerson = new Person(req.body);
  newPerson.save(function(err, person) {
    if (err)
      res.send(err);
    res.json(person);
  });
};

exports.show = function(req, res) {
  Person.findById(req.params.personId, function(err, person) {
    if (err)
      res.send(err);
    res.json(person);
  });
};

exports.update = function(req, res) {
  Person.findOneAndUpdate({_id: req.params.personId}, req.body, {new: true}, function(err, person) {
    if (err)
      res.send(err);
    res.json(person);
  });
};

exports.delete = function(req, res) {
  Person.remove({
    _id: req.params.personId
  }, function(err, person) {
    if (err)
      res.send(err);
    res.json({ message: 'person successfully deleted' });
  });
};
