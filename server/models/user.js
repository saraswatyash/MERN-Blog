const mongoose=require('mongoose');
const schema=mongoose.Schema;
const users=new schema({
    name:
    {
        type:String,
        required:[true]
    },
    email:
    {
        type:String,
        required:[true],
        unique:true
    },
    password:
    {
        type:String,
        required:[true]
    },
    image:
    {
        type:String,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fthenounproject.com%2Fterm%2Fuser%2F&psig=AOvVaw3Cv-3Ma_VLrlBXT8IX0jrf&ust=1598780078814000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCPqoiOwOsCFQAAAAAdAAAAABAD"
    }
})
const User=mongoose.model('User',users);
module.exports=User;