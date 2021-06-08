const { Brand } = require('../models')
module.exports={
    save:async (req, res) => {
        let data = {
            marca: req.body.marca,
        }
        const result = await Brand.create(data)

        res.redirect('/')
    }
}