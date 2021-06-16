const express = require('express');
const router = express.Router();
const atualizar = require('../controllers/updateColors');

router.post('/', atualizar.update);

module.exports = router;