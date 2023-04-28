import { toast } from 'react-toastify';
import Service from '../axios';

export const createProductService=async(productData)=>{
    try {
       const response=await Service.post("/api/v1/product/create-product",productData);
       return response;
    } catch{
        toast.error("Something went wrong!");
    }
}

export const getProductService=async(productData)=>{
    try {
       const response=await Service.get("/api/v1/product/get-product",productData);
       return response;
    } catch{
        toast.error("Something went wrong!");
    }
}


