const express = require('express')
const router = express.Router()

const {
    Colors,
    Brands,
} = require('../models');

router.get('/', async (req, res) => {

    const colorsResult = await Colors.findAll();
    const brandsResult = await Brands.findAll();

    res.render('pages/cadastroVehicles', {
        brands: brandsResult,
        colors: colorsResult
    })
})

module.exports=router;