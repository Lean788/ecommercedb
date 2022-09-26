const express = require('express');
const router = express.Router();

// Import controllers
const UserController = require('./controllers/UserController');
const OrderController = require('./controllers/OrderController');

//Home
router.get('/', (req, res) => res.json({foo: "bar"}));

//Customers
router.get('/users', UserController.all);
router.get('/orders', OrderController.all);

module.exports = router;