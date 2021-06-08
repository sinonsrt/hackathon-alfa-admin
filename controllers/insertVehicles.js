const { Vehicles } = require('../models')
module.exports={
    save:async (req, res) => {
        let data = {
            modelo: req.body.modelo,
            anomodelo: req.body.anomodelo,
            anofabricacao: req.body.anofabricacao,
            valor: req.body.valor,
            tipo: req.body.tipo,
            fotoDestaque: req.body.fotoDestaque,
            marca_id: req.body.marca_id,
            cor_id: req.body.cor_id,
            usuario_id: req.body.usuario_id,
            opcionais: req.body.opcionais
        }
        const result = await Vehicles.create(data)

        res.redirect('/')
    }
}