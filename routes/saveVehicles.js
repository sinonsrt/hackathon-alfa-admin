const express = require('express')
const router = express.Router()
const vehicles = require ('../controllers/insertVehicles')

router.post('/', vehicles.save)

module.exports = router;