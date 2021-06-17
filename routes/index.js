const express = require('express');
const router = express.Router();

const {
	Vehicles,
	Colors,
	Brands,
	sequelize
} = require('../models');
const { QueryTypes } = require('sequelize');

/* GET home page. */
router.get('/', async function (req, res, next) {

	const [novos] = await sequelize.query(
		`SELECT COUNT(*) AS novos
				FROM Vehicles v 
				WHERE v.tipo = 'Novo'
		`, { type: QueryTypes.SELECT }
	)

	const [seminovos] = await sequelize.query(
		`SELECT COUNT(*) AS seminovos
				FROM Vehicles v 
				WHERE v.tipo = 'Semi-novo'
		`, { type: QueryTypes.SELECT }
	)

	const [destaques] = await sequelize.query(
		`SELECT COUNT(*) AS destaques
				FROM Vehicles v 
				WHERE v.destaque = 1
		`, { type: QueryTypes.SELECT }
	)

	const data = {
		novos,
		seminovos,
		destaques
	}

	console.log(data)

	res.render('index', {data});

});

module.exports = router;
