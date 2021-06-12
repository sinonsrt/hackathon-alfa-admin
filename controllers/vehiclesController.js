const { Vehicles } = require('../models');

const { uploadFile } = require('../config/s3');

module.exports = {

    save: async (req, res) => {

        console.log(req.file);

        const awsUpload = await uploadFile(req.file);
        console.log(awsUpload);
        
        let data = {
            modelo: req.body.modelo,
            anomodelo: req.body.anomodelo,
            anofabricacao: req.body.anofabricacao,
            valor: req.body.valor,
            tipo: req.body.tipo,
            foto: awsUpload.Location,
            destaque: req.body.destaque,
            opcionais: req.body.opcionais,
            marca_id: req.body.marca_id,
            cor_id: req.body.cor_id,
            usuario_id: 1
        }
        
        const result = await Vehicles.create(data);

        res.redirect('/');
    }
}