'use strict';
module.exports = function(app) {
  var PersonController = require('../controllers/PersonController');

  // todoList Routes
  app.route('/persons')
    .get(PersonController.index)
    .post(PersonController.store);


  app.route('/persons/:personId')
    .get(PersonController.show)
    .put(PersonController.update)
    .delete(PersonController.delete);
};
