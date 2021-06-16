const { Brands } = require('../models');

module.exports = {
    show:async(req, res)=>{
        const params = req.params.id;
        const result = await Brands.findOne({
            where: { id: params },
            attributes: [ 'id', 'marca' ]
        });
        console.log(result)

        if(result === null){
            res.render('error', { message:'Algo deu errado' })
        }else{
            res.render('pages/editBrand', { data:result });
        }
    }
}