const express = require('express')
const router = express.Router()
const colors = require ('../controllers/insertColors')

router.post('/', colors.save)

module.exports = router;