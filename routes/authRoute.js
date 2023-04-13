import express from 'express';
import {
     registerController,
     testController,
     userLoginController } from '../controller/authController.js';
import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';


const router=express.Router();

// User Registration Route
router.post('/register',registerController);

// Login Route
router.post('/login',userLoginController);

// Protect Route
router.get('/test',requireSignIn,isAdmin,testController);


export default router;