const {
    Vehicles,
    Colors,
    Brands
} = require('../models');

const {
    uploadFile
} = require('../config/s3');

module.exports = {

    save: async (req, res) => {

        const awsUpload = await uploadFile(req.file);

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
    },

    show: async (req, res) => {
        const result = await Vehicles.findAll({
            attributes: [
                'id',
                'modelo',
                'anomodelo',
                'anofabricacao',
                'valor',
                'tipo',
                'foto',
                'destaque',
                'marca_id',
                'cor_id',
                'opcionais'
            ]
        });

        const colorsResult = await Colors.findAll({
            where: {
                id: result.cor_id || 0
            }
        })
        const brandsResult = await Brands.findAll({
            where: {
                id: result.marca_id || 0
            }
        });
    
        res.render('pages/listVehicles', {
            data: result,
            brand: brandsResult,
            colors: colorsResult
        });
    },
}