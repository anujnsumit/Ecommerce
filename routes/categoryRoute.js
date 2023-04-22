import express from 'express';
import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';
import { createCategoryController, deleteCategoryController, getAllCategory, singleCategoryController, updateCategoryController } from '../controller/categoryController.js';

const router=express.Router();

// Create Category
router.post("/create-category",requireSignIn,isAdmin,createCategoryController);

// Update Category
router.put("/update-category/:id",requireSignIn,isAdmin,updateCategoryController);

// get all category
router.get("/get-category",getAllCategory);

// Get Single Category
router.get("/single-category/:slug",singleCategoryController);

// Delete Category
router.delete("/delete-category/:id",requireSignIn,isAdmin,deleteCategoryController);

export default router;