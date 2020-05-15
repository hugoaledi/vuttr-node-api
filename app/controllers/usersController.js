const { User } = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {
    async register(req, res) {
        const { name, email, password } = req.body;

        if (name == undefined || name.length == 0) {
            throw new ValidationError('Name is required.');
        }

        const user = await User.findOne({ where: { email } });

        if (user != undefined) {
            res.json({
                message: 'Usuário já existe'
            });
        } else {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);

            await User.create({ name, email, password: hash });

            res.status(200);
        }
    }
};