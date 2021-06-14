const express = require('express')
const router = express.Router()
const vehicles = require ('../controllers/vehiclesController')

const multer = require('multer');
const multerConfig = require('../config/multerConfig');
const upload = multer(multerConfig);

router.get('/', vehicles.show);
router.post('/salvar', upload.single('imagem'), vehicles.save);

module.exports = router;