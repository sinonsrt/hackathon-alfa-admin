const { Colors } = require('../models')

module.exports={
    show:async( req, res ) => {
        const result = await Colors.findAll({
            attributes:['id', 'cor']
        })
        return res.json(result);
    },
    view:async ( req,res )=>{
        const result = await Colors.findAll({
            attributes:['id', 'cor']
        })

        res.render('pages/listColors',{data:result});
    }
}