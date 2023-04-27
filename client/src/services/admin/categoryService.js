import { toast } from 'react-toastify';
import Service from '../axios';

export const adminCatrgoryService=async()=>{
    try {
       const response=await Service.get('api/v1/category/get-category');
       return response;
    } catch{
        toast.error("Something went wrong!");
    }
}

export const addCategoryService=async(data)=>{
    console.log(data,'data')
    try {
       const response=await Service.post('/api/v1/category/create-category',data);
       return response;
    } catch{
        toast.error("Something went wrong!");
    }
}

export const updateCategoryService=async(data)=>{
    const {id,name}=data;
    try {
       const response=await Service.put(`/api/v1/category/update-category/${id}`,{name});
       return response;
    } catch{
        toast.error("Something went wrong!");
    }
}

export const deleteCategoryService=async(id)=>{
    try {
       const response=await Service.delete(`/api/v1/category/delete-category/${id}`);
       return response;
    } catch{
        toast.error("Something went wrong!");
    }
}

