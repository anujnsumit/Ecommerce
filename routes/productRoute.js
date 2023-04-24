import express from "express";

import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';
import { createProductController } from "../controller/productController.js";

const router=express.Router();


router.post("/create-product",requireSignIn,isAdmin,createProductController)



export default router;