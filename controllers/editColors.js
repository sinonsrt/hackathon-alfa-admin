const {
    Colors
} = require('../models');

module.exports = {
    show: async (req, res) => {
        const param = req.params.id;
        const result = await Colors.findOne({
            where: {
                id: param
            },
            attributes: ['id', 'cor']
        });

        if (result === null) {
            res.render('error', {
                message: 'Algo deu errado'
            })
        } else {
            res.render('pages/editColors', {
                data: result
            });
        }
    }
}