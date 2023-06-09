import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    name:{
    type:String,
    required:[true,'Enter user name'],
    trim:true
    },
    email:{
        type:String,
        required:[true,'Enter email id'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Enter password'],
    },
    phone:{
        type:String,
        required:[true,'Enter phone'],
    },
    address:{
        type:String,
        required:[true,'Enter address'],
    },
    answer:{
        type:String,
        required:true
    },
    role:{
        type:Number,
        default:0
    }
},{timestamps:true})

export default mongoose.model("users",UserSchema);