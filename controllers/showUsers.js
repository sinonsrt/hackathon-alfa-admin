const { Users } = require('../models')

module.exports={
    show:async( req, res ) => {
        const result = await Users.findAll({
            attributes:['id', 'nome', 'login']
        })
        return res.json(result);
    },
    view:async ( req,res )=>{
        const result=await Users.findAll({
            attributes:['id','nome','login']
        });

        res.render('pages/listUsers',{data:result});
    }
}