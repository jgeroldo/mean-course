var express = require('express');
var router = express.Router();

/* loading the hotels controller */
var ctrlHotels = require('../controllers/hotels.controllers.js');

router
  .route('/hotels')
  .get(ctrlHotels.hotelsGetAll);

module.exports = router;
