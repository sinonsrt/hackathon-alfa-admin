const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('cadastroColors')
})


module.exports=router;