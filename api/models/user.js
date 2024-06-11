const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
       type:String,
       required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    uid:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    dockerDepartment:{
        type:String,
        required:false,
    },
    docAvatar:{
        type:String,
        required:false,
    },
})

const UserModel = mongoose.model("users",userSchema);
module.exports =UserModel;

