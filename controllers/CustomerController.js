const { Customer } = require('../models/index');

module.exports = {

    async all(req, res) {
        let customers = await Customer.findAll({
            include: {
                attributes: ['name', 'surname']
            }
        });

        res.json(customers);
    }

}