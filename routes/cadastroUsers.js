const express=require('express')
const router=express.Router()

routes.get('/', (req, res) => {
    res.render('cadastroUsers')
})


module.exports=router;