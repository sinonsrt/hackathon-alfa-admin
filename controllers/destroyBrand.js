const { Brands } = require('../models');

module.exports = {
    destroy: async(req,res)=>{
        const params = req.params.id;
        const destroy = await Brands.destroy({
            where:{ id: params }
        })
        
        res.redirect('listBrand');
    }
}