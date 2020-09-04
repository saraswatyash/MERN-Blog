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
articleroute.put('/blog/articles/:id',(req,res,next)=>{
    article.findByIdAndUpdate({_id:req.params.id},req.body,{useFindAndModify:false,new:true}).then(data=>{
        res.send(data)
    }).catch(next);
})
articleroute.delete('/blog/articles/:id',(req,res,next)=>{
    article.findByIdAndDelete({_id:req.params.id},{useFindAndModify:false})
    .then(data=>{
        res.send(data);
    })
})
module.exports=articleroute;