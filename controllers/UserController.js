const { User } = require('../models/index');

module.exports = {

    async all(req, res) {
        let users = await User.findAll({
            include: {
                attributes: ['name', 'surname']
            }
        });

        res.json(users);
    }

}