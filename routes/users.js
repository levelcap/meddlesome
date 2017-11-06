const express = require('express');
const router = express.Router();
const controller = require('../src/controllers/usersController');

router.get('/', controller.currentUser);
router.get('/search/:term', controller.search);
router.get('/:id', controller.getUser);
router.post('/', controller.createUser);
router.put('/:id', controller.updateUser);

module.exports = router;
