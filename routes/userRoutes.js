const express = require('express');
const User = require('../models/users');
const userController = require('../controllers/userController');
const router = express.Router();

// Route to add a new user
router.post('/users', userController.addUser);

// Route to get all users
router.get('/users', router.get('/users', userController.getAllUsers));

module.exports = router;
