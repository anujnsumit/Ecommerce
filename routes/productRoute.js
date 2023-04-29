import express from "express";

import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';
import { createProductController, getProductController, getSingleProductController, productDeleteController, productFiltersController, productPhotoController, updateProductController } from "../controller/productController.js";
import formidable from "express-formidable";

const router=express.Router();


router.post("/create-product",requireSignIn,isAdmin,formidable(),createProductController);

// update route
router.put("/update-product/:pid",requireSignIn,isAdmin,formidable(),updateProductController);

// get routes
router.get("/get-product",getProductController);

// get single product routes
router.get("/get-product/:slug",getSingleProductController);

// get photo route
router.get("/product-photo/:pid",productPhotoController);

// Delete route
router.delete("/delete-product/:pid",productDeleteController);

// filter product
router.post("/product-filters",productFiltersController);


export default router;