const express = require('express');
const router = express.Router();
const userController = require('../Controlllers/user');

router.post('/signup', userController.signup);

router.post('/login', userController.login);

router.get('/users', userController.getAllUsers);

module.exports = router;