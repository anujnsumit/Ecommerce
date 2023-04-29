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

export const getProductService=async()=>{
    try {
       const response=await Service.get("/api/v1/product/get-product");
       return response;
    } catch{
        toast.error("Something went wrong!");
    }
}

export const getSingleProductService=async(params)=>{
    try {
       const response=await Service.get(`/api/v1/product/get-product/${params}`);
       return response;
    } catch{
        toast.error("Something went wrong!");
    }
}

export const updateProductService=async(pid,productData)=>{
    try {
       const response=await Service.put(`/api/v1/product/update-product/${pid}`,productData);
       return response;
    } catch{
        toast.error("Something went wrong!");
    }
}

export const deleteProductService=async(pid)=>{
    try {
       const response=await Service.delete(`/api/v1/product/delete-product/${pid}`);
       return response;
    } catch{
        toast.error("Something went wrong!");
    }
}

