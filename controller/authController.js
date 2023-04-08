import userModel from '../models/userModel.js';
import { hashPassword } from '../utils/authHelper.js';
import jwtToken from 'jsonwebtoken';

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
      const users=await new userModel({name,email,password,phone:hasedPassword,address}).save();
      res.status(201).send({success:true,message:'user register successfully',users})
   } catch (error) {
      console.log("error",error);
      res.status(500).json({success:false,message:"Error in Registration",error})
   }
}

export {registerController};