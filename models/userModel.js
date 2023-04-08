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
    role:{
        type:Number,
        default:0
    },
    createdAt:Date.now()
} ,{timestamps:true})

export default mongoose.model("users",UserSchema);