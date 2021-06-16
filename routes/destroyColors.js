const express = require('express');
const router = express.Router();
const excluir = require('../controllers/destroyColors');

router.get('/:id', excluir.destroy);

module.exports = router;