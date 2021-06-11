const express = require('express')
const router = express.Router()
const find = require('../controllers/showUsers')

router.get('/', find.view)


module.exports=router;