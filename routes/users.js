const express = require('express');
const router = express.Router();
const controller = require('../src/controllers/usersController');

router.get('/', controller.currentUser);
router.get('/search/:term', controller.search);
router.get('/:id', controller.getUser);

module.exports = router;
