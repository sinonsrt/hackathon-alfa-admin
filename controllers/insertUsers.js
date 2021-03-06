const {
    Users
} = require('../models')
const bcrypt = require('bcryptjs');

module.exports = {
    save: async (req, res) => {
        const password = req.body.senha;
        const crypt = bcrypt.genSaltSync(10);
        const dirtyPassword = bcrypt.hashSync(password, crypt);

        const data = {
            nome: req.body.nome,
            login: req.body.login,
            senha: dirtyPassword
        }
        const result = await Users.create(data)

        res.redirect('listUsers')
    }
}