const express = require('express')
const router = express.Router()
const brand = require ('../controllers/insertBrand')

router.post('/', brand.save)

module.exports = router;