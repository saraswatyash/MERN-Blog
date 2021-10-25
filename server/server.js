const express=require('express');
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
const userroute=require('./routes/user_route')
const articleroute=require('./routes/article_route')
const cors=require('cors')
var app=express();
mongoose.connect("mongodb+srv://db:adm123@cluster0.u8x7q.mongodb.net/db?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('Connection made to the MongoDB!!');
});
app.use(cors());
app.use(bodyparser.json());
app.use(userroute);
app.use(articleroute);
app.listen( process.env.port || 3001,'127.0.0.1', () => {
    console.log('Listening for request at PORT 3001');
})

