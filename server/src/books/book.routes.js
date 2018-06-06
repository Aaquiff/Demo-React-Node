'use strict'

var router = require('express') ();
var controller = require('./book.controller')

router.get('/',(req,res)=> {
    controller.getAll().then((data)=>{
        res.status(data.status).send(data.data);
    })
})

router.post('/',(req,res)=> {
    controller.insertBook(req.body).then((data)=>{
        res.status(data.status).send(data.message);
    })
})

module.exports = router;