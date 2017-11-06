const express = require('express');
const router = express.Router();
const indexController = require('../src/controllers/indexController');

router.get('/', indexController.listing);

module.exports = router;
