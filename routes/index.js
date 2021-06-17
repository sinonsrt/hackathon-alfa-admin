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

	const ultimos = await sequelize.query(
		`SELECT v.id, v.modelo, v.anofabricacao, v.anomodelo, v.valor, v.foto,
			v.tipo, v.destaque, b.marca, c.cor
			FROM Vehicles v 
			INNER JOIN Brands b ON v.marca_id = b.id
			INNER JOIN Colors c ON v.cor_id = c.id
			ORDER BY v.id LIMIT 3
		`,{ type: QueryTypes.SELECT }
	)

	const marcas = await sequelize.query(
		`SELECT COUNT(*) as qtde, b.marca
			FROM Vehicles v 
			INNER JOIN Brands b ON v.marca_id = b.id
			GROUP BY marca
		`, { type: QueryTypes.SELECT }
	)

	const data = {
		novos,
		seminovos,
		destaques,
		ultimos,
		marcas
	}

	res.render('index', {data});

});

module.exports = router;
