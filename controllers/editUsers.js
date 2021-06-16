const {
    Users
} = require('../models');

module.exports = {
    show: async (req, res) => {
        const param = req.params.id;
        const result = await Users.findOne({
            where: {
                id: param
            },
            attributes: ['id', 'nome', 'login']
        });
        if (result === null) {
            res.render('error', {
                message: 'Algo deu errado'
            })
        } else {
            res.render('pages/editUsers', { data: result });
        }
    }
}