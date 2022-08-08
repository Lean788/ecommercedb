const { Order } = require('../models/index');

module.exports = {

    async all(req, res) {
        let orders = await Order.findAll();

        res.json(orders);
    }

}