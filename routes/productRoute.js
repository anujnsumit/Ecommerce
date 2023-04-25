import express from "express";

import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';
import { createProductController, getProductController, getSingleProductController, productDeleteController, productPhotoController, updateProductController } from "../controller/productController.js";
import formidable from "express-formidable";

const router=express.Router();


router.post("/create-product",requireSignIn,isAdmin,formidable(),createProductController);

// update route
router.post("/update-product/:pid",requireSignIn,isAdmin,formidable(),updateProductController);

// get routes
router.get("/get-product",getProductController);

// get single product routes
router.get("/get-product/:slug",getSingleProductController);

// get photo route
router.get("/product-photo/:pid",productPhotoController);

// Delete route
router.get("/product/:pid",productDeleteController);


export default router;