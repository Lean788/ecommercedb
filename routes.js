const express = require('express');
const router = express.Router();

// Import controllers
const CustomerController = require('./controllers/CustomerController');
const OrderController = require('./controllers/OrderController');

//Home
router.get('/', (req, res) => res.json({foo: "bar"}));

//Customers
router.get('/customers', CustomerController.all);
router.get('/orders', OrderController.all);

module.exports = router;