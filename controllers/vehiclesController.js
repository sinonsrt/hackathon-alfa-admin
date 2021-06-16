const {
    Vehicles,
    Colors,
    Brands,
    sequelize
} = require('../models');
const { QueryTypes } = require('sequelize');

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
        const result = await sequelize.query(
            `SELECT *
                FROM Vehicles v 
                INNER JOIN Brands b ON v.marca_id = b.id
                INNER JOIN Colors c ON v.cor_id = c.id
            `,{ type: QueryTypes.SELECT }
        )
        console.log(result)

        res.render('pages/listVehicles', {
            data: result
        });
    },
}