const { Brands } = require('../models')
module.exports={
    save:async (req, res) => {
        const data = {
            marca: req.body.marca,
        }
        const result = await Brands.create(data)

        res.redirect('/')
    }
}