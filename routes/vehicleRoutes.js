const express = require('express')
const router = express.Router()
const vehicles = require ('../controllers/vehiclesController')
const apiController = require('../api/apiController');

const multer = require('multer');
const multerConfig = require('../config/multerConfig');
const upload = multer(multerConfig);

router.get('/', vehicles.show);
router.post('/salvar', upload.single('imagem'), vehicles.save);

// Rotas API
router.get('/api/v1/veiculos', apiController.getDestaques);
router.get('/api/v1/veiculos/novos', apiController.getNovos);
router.get('/api/v1/veiculos/seminovos', apiController.getSeminovos);

module.exports = router;