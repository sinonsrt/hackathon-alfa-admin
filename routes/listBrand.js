const express = require('express')
const router = express.Router()
const find = require('../controllers/showBrand')

router.get('/', find.view)


module.exports=router;