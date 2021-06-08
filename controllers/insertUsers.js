const { Users } = require('../models')
module.exports={
    save:async (req, res) => {
        let data = {
            nome: req.body.nome,
            login: req.body.login,
            senha: req.body.senha
        }
        const result = await Users.create(data)

        res.redirect('/')
    }
}