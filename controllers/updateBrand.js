const { Brands } = require('../models')

module.exports = {
    update: async (req, res) => {
        const params = req.body.id
        const data = {
            marca: req.body.marca
        }

        const update = await Brands.update(data, { 
            where: { id: params }
        })

        res.redirect('/');
    },
}