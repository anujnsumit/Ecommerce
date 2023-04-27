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
