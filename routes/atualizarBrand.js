const express = require('express');
const router = express.Router();
const atualizar = require('../controllers/updateBrand');

router.post('/', atualizar.update);

module.exports = router;