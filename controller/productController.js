import productModel from "../models/productModel.js";

export const createProductController=async(req,res)=>{
try {
    const product=await productModel({}).save();
} catch (error) {
    console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in delete Category",
            error
        })  
}
}