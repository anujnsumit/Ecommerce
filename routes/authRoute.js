import express from 'express';
import {
     forgotPasswordController,
     registerController,
     testController,
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

// Protect Route
router.get('/user-auth',requireSignIn,(req,res)=>{
     res.status(200).send({ok:true})
});


export default router;