const { Colors } = require('../models')
module.exports={
    save:async (req, res) => {
        let data = {
            cor: req.body.cor,
        }
        const result = await Colors.create(data)

        res.redirect('listColors')
    }
}