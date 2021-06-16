const { Users } = require('../models')

module.exports = {
    update: async (req, res) => {
        const params = req.body.id
        const data = {
            nome: req.body.nome,
            login: req.body.login,
            senha: req.body.senha
        }

        const update = await Users.update(data, { 
            where: { id: params }
        })

        res.redirect('listUsers');
    },
}