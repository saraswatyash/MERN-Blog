const express=require('express');
const user=require('../models/user')
const userroute=express.Router();
userroute.get('/blog/users/:email/:password',(req,res)=>{
    email=req.params.email
    password=req.params.password
    user.findOne({email}).then((data)=>{

        data==null?res.sendStatus(204):data.password===password?res.send(data):res.sendStatus(204).send(false)
    })
})
userroute.post('/blog/users',(req,res,next)=>{
    user.create(req.body).then( data => {
        res.status(201).send(data);
    }).catch(error=>{res.send(error)})
})
module.exports=userroute;