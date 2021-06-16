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

    update: async (req, res) => {
        const params = req.params.id
        const data = {...req.body}
        
        const update = await Vehicles.update(data, { 
            where: { id: params }
        })

        res.redirect('/veiculos');
    },

    destroy: async(req,res)=>{
        const params = req.params.id;

        const destroy = await Vehicles.destroy({
            where:{ id: params }
        })
        
        res.redirect('/veiculos');
    },

    show: async (req, res) => {
        const result = await sequelize.query(
            `SELECT v.id, v.modelo, v.anofabricacao, v.anomodelo, v.valor, v.foto,
                v.tipo, v.destaque, v.opcionais, b.marca, c.cor
                FROM Vehicles v 
                INNER JOIN Brands b ON v.marca_id = b.id
                INNER JOIN Colors c ON v.cor_id = c.id
            `,{ type: QueryTypes.SELECT }
        )

        res.render('pages/listVehicles', {
            data: result
        });
    },

    edit: async (req, res) => {
        const params = req.params.id;

        const result = await Vehicles.findOne({
            where: { id: params },
            attributes: [ 'id', 'modelo', 'anomodelo', 'anofabricacao', 'valor', 'tipo', 'foto', 'destaque', 'marca_id', 'cor_id', 'opcionais']
        });

        const brands = await Brands.findAll();
        const colors = await Colors.findAll();

        if(result === null){
            res.render('error', { message:'Algo deu errado' })
        }else{
            res.render('pages/editVehicles', {
                data: result,
                brands,
                colors
            });
        }
    }
}