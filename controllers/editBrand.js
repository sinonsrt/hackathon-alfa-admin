const { Brands } = require('../models');

module.exports = {
    show:async(req, res)=>{
        const param = req.params.id;
        const result = await Brands.findOne({
            where: { id:param },
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