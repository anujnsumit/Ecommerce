import slugify from "slugify";
import categoryModal from "../models/categoryModal.js";

// Create controller
export const createCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(401).send({ success: false, message: "Name is required" })
        }
        const existingCategory = await categoryModal.findOne(name);
        if (existingCategory) {
            return res.status(200).send({
                success: true, messgae: "Category already existing"
            })
        }
        const category = await new categoryModal({ name, slug: slugify(name) }).save();
        res.status(201).send({ success: true, category, messgae: "category is created!" })
    } catch (error) {
        res.status(500).send({ success: false, messgae: "error in category", error })
    }

}

// Update Controller
export const updateCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;
        const category = await categoryModal.findByIdAndUpdate(id, { name, slug: slugify(name) }, { new: true });
        req.status(200).send({
            success: true,
            message: "Category Updated Successfully",
            category
        })
    } catch (error) {
        console.log("first")
        req.status(500).send({
            success: false,
            message: "Category Not Updated ",
            error
        })
    }

}

// Get All Category
export const getAllCategory = async () => {
    try {
        const category = await categoryModal.find({});
        res.status(200).send({ success: true, message: "All Category", category })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "No Category Found",
            error
        })
    }
}

// Get Single Category

export const singleCategoryController = async (req, res) => {
    try {
        const { slug } = req.params;
        const category = await categoryModal.findById({ slug })
        res.status(200).send({ success: true, message: "Get Single Category Successfully", category })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "No Category Found",
            error
        })
    }
}

export const deleteCategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        await categoryModal.findByIdAndDelete({ id })
        res.status(200).send({ success: true, message: "Category Deleted Successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in delete Category",
            error
        })
    }
}