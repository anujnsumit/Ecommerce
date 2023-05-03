import userModel from '../models/userModel.js';
import { comparePassword, hashPassword } from '../utils/authHelper.js';
import JWT from 'jsonwebtoken';
import orderModel from "../models/orderModel.js";

const registerController=async(req,res)=>{
   try {
      const {name,email,password,address,phone,answer}=req.body;
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
      if(!answer){
         return res.send({error:"answer is required"})
      }
      // exiting user
      const exitingUser=await userModel.findOne({email});
      if(exitingUser){
         res.status(200).json({success:true,message:"Already Register please login"})
      }
      // register user
      const hasedPassword=await hashPassword(password);
      // save user
      const users=await new userModel({name,email,password:hasedPassword,phone,address,answer}).save();
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
      const token=JWT.sign({ _id: user._id }, process.env.JWT_SECRET,{expiresIn:'7d'});
      res.status(201).json({success:true,message:"login successfull",user:{
         name:user.name,
         email:user.email,
         phone:user.phone,
         address:user.address,
         role:user.role
      },
      token
   })
   } catch (error) {
      console.log(error);
      res.status(500).json({success:false,message:"Error in login",error})
   }
}

const forgotPasswordController = async (req, res) => {
   try {
     const { email, answer, newPassword } = req.body;
     if (!email) {
       res.status(400).send({ message: "Emai is required" });
     }
     if (!answer) {
       res.status(400).send({ message: "answer is required" });
     }
     if (!newPassword) {
       res.status(400).send({ message: "New Password is required" });
     }
     //check
     const user = await userModel.findOne({ email, answer });
     //validation
     if (!user) {
       return res.status(404).send({
         success: false,
         message: "Wrong Email Or Answer",
       });
     }
     const hashed = await hashPassword(newPassword);
     await userModel.findByIdAndUpdate(user._id, { password: hashed });
     res.status(200).send({
       success: true,
       message: "Password Reset Successfully",
     });
   } catch (error) {
     console.log(error);
     res.status(500).send({
       success: false,
       message: "Something went wrong",
       error,
     });
   }
 };

 
const testController=async(req,res)=>{
console.log("protected route");
}
// update profile
export const updateProfileController=async(req,res)=>{
try {
   const {name,email,password,address,phone}=req.body;
   const user=await userModel.findById(req.user._id);
   if(password && password.length){
      return res.json({error:"password is required and 6 character long"})
   }
   const hashed=password && await hashPassword(password); 
   const updateUser=await userModel.findByIdAndUpdate(req.user._id,{
      name:name|| user.name,
      email:email|| user.email,
      address:address|| user.address,
      phone:phone|| user.phone,
      password:hashed ||user.password
   },{new:true})
   res.status(200).send({
      success:true,
      message:"profile Updated successfully",
      updateUser
   })
} catch (error) {
   console.log(error);
   res.status(400).send({
     success: false,
     message: "Error while updating profile",
     error,
   });
}
}



//orders
 const getOrdersController = async (req, res) => {
   try {
     const orders = await orderModel
       .find({ buyer: req.user._id })
       .populate("products", "-photo")
       .populate("buyer", "name");
     res.json(orders);
   } catch (error) {
     console.log(error);
     res.status(500).send({
       success: false,
       message: "Error WHile Geting Orders",
       error,
     });
   }
 };
 
 
//orders
 const getAllOrdersController = async (req, res) => {
   try {
      console.log('orders')
     const orders = await orderModel
       .find({})
       .populate("products", "-photo")
       .populate("buyer", "name")
       .sort({ createdAt: "-1" });
       console.log(orders,'orders')
     res.json(orders);
   } catch (error) {
     console.log(error);
     res.status(500).send({
       success: false,
       message: "Error WHile Geting Orders",
       error,
     });
   }
 };

//order status
 const orderStatusController = async (req, res) => {
   try {
     const { orderId } = req.params;
     const { status } = req.body;
     const orders = await orderModel.findByIdAndUpdate(
       orderId,
       { status },
       { new: true }
     );
     res.json(orders);
   } catch (error) {
     console.log(error);
     res.status(500).send({
       success: false,
       message: "Error While Updateing Order",
       error,
     });
   }
 };

export {registerController,userLoginController,testController,forgotPasswordController,getOrdersController,getAllOrdersController,orderStatusController};