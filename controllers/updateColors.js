const { Colors } = require('../models')

module.exports = {
    update: async (req, res) => {
        const params = req.body.id
        const data = {
            cor: req.body.cor,
        }

        const update = await Colors.update(data, { 
            where: { id: params }
        })

        res.redirect('listColors');
    },
}