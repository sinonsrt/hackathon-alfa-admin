const {
    Users
} = require('../models');
const bcrypt = require('bcryptjs');


module.exports = {
    check: async (req, res) => {
        const login = req.body.login;
        const password = req.body.password;
        const result = await Users.findOne({
            where: {
                login: login
            }
        });

        console.log(result)
        if (result === null) {
            const message = {
                message: 'Usuário não encontrado!'
            };
            res.render('error', message);
        } else {
            let auth = await bcrypt.compare(password, result.senha);
            if (auth === true) {
                res.redirect('/');
            } else {
                const message = {
                    message: 'Usuário ou Senha não encontrados!'
                };
                res.render('error', message);
            }
        }
    }
}