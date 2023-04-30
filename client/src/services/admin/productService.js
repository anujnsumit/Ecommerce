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

export const getProductListService=async(page)=>{
    try {
       const response=await Service.get(`/api/v1/product/product-list/${page}`);
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

export const filterProductService=async(data)=>{
    try {
       const response=await Service.post(`/api/v1/product/product-filters`,data);
       return response;
    } catch{
        toast.error("Something went wrong!");
    }
}

export const getTotalCountService=async()=>{
    try {
       const response=await Service.get("/api/v1/product/product-count");
       return response;
    } catch{
        toast.error("Something went wrong!");
    }
}


export const getSearchService=async(keyword)=>{
    try {
       const response=await Service.get(`/api/v1/product/search/${keyword}`);
       return response;
    } catch{
        toast.error("Something went wrong!");
    }
}

export const getRelatedProductService=async(pid,cid)=>{
    try {
       const response=await Service.get( `/api/v1/product/related-product/${pid}/${cid}`);
       return response;
    } catch{
        toast.error("Something went wrong!");
    }
}

export const getProductCategoryService=async(slug)=>{
    try {
       const response=await Service.get( `/api/v1/product/product-category/${slug}`);
       return response;
    } catch{
        toast.error("Something went wrong!");
    }
}

