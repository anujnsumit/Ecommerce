import express from "express";

import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';
import { brainTreePaymentController, braintreeTokenController, createProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productDeleteController, productFiltersController, productListController, productPhotoController, realtedProductController, searchProductController, updateProductController } from "../controller/productController.js";
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

// product count
router.get('/product-count',productCountController);

// product per page
router.get("/product-list/:page",productListController)

// product search 
router.get('/search/:keyword',searchProductController);

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);


export default router;