import userModel from '../models/userModel.js';
import { comparePassword, hashPassword } from '../utils/authHelper.js';
import JWT from 'jsonwebtoken';

const registerController=async(req,res)=>{
   try {
      const {name,email,password,address,phone}=req.body;
      // validation
      if(!name){
         return res.send({error:"name is required"})
      }
      if(!email){
         return res.send({error:"email is required"})
      }
      if(!password){
         return res.send({error:"password is required"})
      }
      if(!address){
         return res.send({error:"address is required"})
      }
      if(!phone){
         return res.send({error:"phone is required"})
      }
      // exiting user
      const exitingUser=await userModel.findOne({email});
      if(exitingUser){
         res.status(200).json({success:true,message:"Already Register please login"})
      }
      // register user
      const hasedPassword=await hashPassword(password);
      // save user
      const users=await new userModel({name,email,password:hasedPassword,phone,address}).save();
      res.status(201).send({success:true,message:'user register successfully',users})
   } catch (error) {
      console.log("error",error);
      res.status(500).json({success:false,message:"Error in Registration",error})
   }
}

// Post Login

const userLoginController=async(req,res)=>{
   try {    
      const {email,password}=req.body;
      if(!email || !password){
       return res.status(404).json({success:false,message:"Invalid email or password"})
      }
      // check user 
      const user=await userModel.findOne({email});
      if(!user){
      return res.status(404).json({success:false,message:"user not found"})
      }
      // match password
      const match=await comparePassword(password,user.password);
      if(!match){
         return res.status(200).json({success:true,message:"user not found"})
      }
      // create token
      const token=await JWT.sign({ _id: user._id }, process.env.JWT_SECRET,{expiresIn:'7d'});
      res.status(201).json({success:true,message:"login successfull",user:{
         name:user.name,
         email:user.email,
         phone:user.phone,
         address:user.address
      },
      token
   })
   } catch (error) {
      console.log(error);
      res.status(500).json({success:false,message:"Error in login",error})
   }
}

const testController=async(req,res)=>{
console.log("protected route");
}

export {registerController,userLoginController,testController};