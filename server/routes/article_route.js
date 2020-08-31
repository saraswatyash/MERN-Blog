const express=require('express');
const article=require('../models/articles')
const articleroute=express.Router();
articleroute.get('/blog/articles',(req,res)=>{
    article.find().then(data=>{
        res.send(data);
    })
})
articleroute.get('/blog/articles/:id',(req,res)=>{
    article.findById({_id:req.params.id}).then(data=>{
        res.send(data);
    })
})
articleroute.post('/blog/articles',(req,res,next)=>{
    article.create(req.body).then( data => {
        res.status(201).send(data);
    })
})
module.exports=articleroute;