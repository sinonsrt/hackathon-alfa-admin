const { Brand } = require('../models')

module.exports={
    show:async( req, res ) => {
        const result = await Brand.findAll({
            attributes:['id', 'marca']
        })
        return res.json(result);
    },
    view:async ( req, res )=>{
        const result=await Brand.findAll({
            attributes:['id','marca']
        });

        res.render('pages/listBrand',{data:result});
    }
}