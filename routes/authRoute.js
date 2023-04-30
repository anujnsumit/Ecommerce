import express from 'express';
import {
     forgotPasswordController,
     registerController,
     testController,
     updateProfileController,
     userLoginController } from '../controller/authController.js';
import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';


const router=express.Router();

// User Registration Route
router.post('/register',registerController);


// forgot password
router.post("/forgot-password",forgotPasswordController);

// Login Route
router.post('/login',userLoginController);

// Protect Route
router.get('/test',requireSignIn,isAdmin,testController);

// Protect User Route
router.get('/user-auth',requireSignIn,(req,res)=>{
     res.status(200).send({ok:true})
});

// Protect User Route
router.get('/user-auth',requireSignIn,(req,res)=>{
     res.status(200).send({ok:true})
});


// update profile
router.put('/profile',requireSignIn,updateProfileController);


export default router;