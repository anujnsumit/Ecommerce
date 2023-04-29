import slugify from "slugify";
import productModel from "../models/productModel.js";
import fs from 'fs';


export const createProductController = async (req, res) => {
    try {
      const { name, description, price, category, quantity, shipping } =
        req.fields;
      const { photo } = req.files;
      //validation
      switch (true) {
        case !name:
          return res.status(500).send({ error: "Name is Required" });
        case !description:
          return res.status(500).send({ error: "Description is Required" });
        case !price:
          return res.status(500).send({ error: "Price is Required" });
        case !category:
          return res.status(500).send({ error: "Category is Required" });
        case !quantity:
          return res.status(500).send({ error: "Quantity is Required" });
        case photo && photo.size > 1000000:
          return res
            .status(500)
            .send({ error: "photo is Required and should be less then 1mb" });
      }
  
      const products = new productModel({ ...req.fields, slug: slugify(name) });
      if (photo) {
        products.photo.data = fs.readFileSync(photo.path);
        products.photo.contentType = photo.type;
      }
      await products.save();
      res.status(201).send({
        success: true,
        message: "Product Created Successfully",
        products,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error in crearing product",
      });
    }
  };

// get all products
export const getProductController=async(req,res)=>{
    try {
        const products=await productModel.find({}).populate("category").select("-photo").limit(12).sort({createdAt:-1});
        res.status(200).send({success:true,totalCount:products.length,products,message:"All Products"});
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in getting product",
            error
        })
    }
}

// get single product
export const getSingleProductController=async(req,res)=>{
try {
    const product=await productModel.findOne({slug:req.params.slug}).select("-photo").populate("category");
    res.status(200).send({
        success: true,
        message: "Get single product",
        product
    })
} catch (error) {
    console.log(error);
    res.status(500).send({
        success: false,
        message: "Error in getting single product",
        error
    })
}
}

// get photo
export const productPhotoController = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.pid).select("photo");
    if (product.photo.data) {
      res.set("Content-type", product.photo.contentType);
      return res.status(200).send(product.photo.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr while getting photo",
      error,
    });
  }
};

export const productDeleteController=async(req,res)=>{
    try {
        await productModel.findByIdAndDelete(req.params.pid).select("-photo")
        res.status(200).send({success:true,message:"product deleted successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).send({
        success: false,
        message: "Error in getting single product",
        error
    }) 
    }
}

export const updateProductController=async(req,res)=>{
    try {
        const { name, description, slug, price, category, quantity, shipping } = req.fields;
        const { photo } = req.files;
        // Validation
        switch (true) {
            case !name: return res.status(500).send({ error: "Name is Required" });
            case !price: return res.status(500).send({ error: "Price is Required" });
            case !description: return res.status(500).send({ error: "Description is Required" });
            case !category: return res.status(500).send({ error: "Category is Required" });
            case !quantity: return res.status(500).send({ error: "Quantity is Required" });
            case photo && photo.size > 1000000: return res.status(500).send({ error: "Photo is Required and size is greater than 1mb" });
        }
        const products = await productModel.findByIdAndUpdate(req.params.pid,{...req.fields,slug:slugify(name)},{new:true});
        if (photo && products?.photo?.data) {
            products.photo.data = fs.readFileSync(photo.path)
            products.photo.contentType = photo.type;
        }
        await products.save();
        res.status(201).send({ success: true, message: "Product updated" ,products});
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in update Category",
            error
        })
    }
}