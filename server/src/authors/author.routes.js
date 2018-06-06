'use strict'

const router = require('express') ();
const AuthorController = require('./author.controller')

router.get('/',(req,res)=> {
    AuthorController.getAll().then((data)=>{
        res.status(data.status).send(data.data);
    }).catch((err)=>{
        res.status(data.status).send(data.message);
    })
})

router.get('/:firstname',(req,res)=> {
    AuthorController.getAuthor(req.params.firstname, req.params.lastname).then((data)=>{
        res.status(data.status).send(data.data);
    }).catch((err)=>{
        res.status(data.status).send(data.message);
    })
})

router.get('/:firstname/books',(req,res)=> {
    AuthorController.getBooksByAuthor(req.params.firstname).then((data)=>{
        res.status(data.status).send(data.data);
    }).catch((err)=>{
        res.status(data.status).send(data.message);
    })
})

module.exports = router;