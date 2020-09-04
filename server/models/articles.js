const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const Article=new Schema({
    title:
    {
        type:String
    },
    description:
    {
        type:String
    },
    name:
    {
        type:String
    },
    tags:
    {
        type:String,
        default:"General"
    }
    

})
const article=mongoose.model('articles',Article);
module.exports=article