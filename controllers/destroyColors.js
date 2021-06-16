const { Colors } = require('../models');

module.exports = {
    destroy: async(req, res)=>{
        const params = req.params.id;
        const destroy = await Colors.destroy({
            where:{ id: params }
        })
        
        res.render('pages/cadastroColors');
    }
}