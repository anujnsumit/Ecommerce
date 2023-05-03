

import { toast } from 'react-toastify';
import Service from '../axios';

export const getAllOrderService=async()=>{
    try {
       const response=await Service.get('/api/v1/auth/orders');
       if(response?.data?.success){
        toast.success("Order Fetch successfully!");
       }else{
        toast.error(response?.data?.error);
       }
       return response;
    } catch{
        toast.error("Something went wrong!");
    }
}