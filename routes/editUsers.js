const express = require('express');
const router = express.Router();
const edit = require('../controllers/editUsers');

router.get('/:id', edit.show);

module.exports = router;