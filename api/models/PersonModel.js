'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonScheme = new Schema({
  name: {
    type: String,
    required: 'Person name is required'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['not_graduated', 'graduated']
    }],
    default: ['not_graduated']
  }
});

module.exports = mongoose.model('Person', PersonScheme);
