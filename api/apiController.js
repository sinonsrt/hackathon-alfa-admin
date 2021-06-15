const { QueryTypes } = require('sequelize');
const { Vehicles, Brands, sequelize } = require('../models');


module.exports = {

    getDestaques: async (req, res) => {

        // const result = await Vehicles.findAll();

        const result = await sequelize.query(
            `SELECT *
                FROM Vehicles v 
                INNER JOIN Brands b ON v.marca_id = b.id
                INNER JOIN Colors c ON v.cor_id = c.id
            WHERE destaque = true
            `,{ type: QueryTypes.SELECT }
        )

        res.json(
            result
        )
    },

    getNovos: async (req, res) => {

        const result = await sequelize.query(
            `SELECT *
                FROM Vehicles v 
                INNER JOIN Brands b ON v.marca_id = b.id
                INNER JOIN Colors c ON v.cor_id = c.id
            WHERE tipo = 'Novo'
            `,{ type: QueryTypes.SELECT }
        )

        res.json(
            result
        )
    },

    getSeminovos: async (req, res) => {

        const result = await sequelize.query(
            `SELECT *
                FROM Vehicles v 
                INNER JOIN Brands b ON v.marca_id = b.id
                INNER JOIN Colors c ON v.cor_id = c.id
            WHERE tipo = 'Semi-novo'
            `,{ type: QueryTypes.SELECT }
        )

        res.json(
            result
        )
    },

    getAll: async (req, res) => {

        const result = await sequelize.query(
            `SELECT *
                FROM Vehicles v 
                INNER JOIN Brands b ON v.marca_id = b.id
                INNER JOIN Colors c ON v.cor_id = c.id
            `,{ type: QueryTypes.SELECT }
        )

        res.json(
            result
        )
    },

}