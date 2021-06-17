const { Users } = require('../models');

module.exports = {
    destroy: async(req, res)=>{
        const params = req.params.id;
        const destroy = await Users.destroy({
            where:{ id: params }
        })
        
        res.redirect('/listUsers');
    }
}