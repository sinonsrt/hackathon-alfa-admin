const express = require('express');
const router = express.Router();
const atualizar = require('../controllers/updateUsers');

router.post('/', atualizar.update);

module.exports = router;