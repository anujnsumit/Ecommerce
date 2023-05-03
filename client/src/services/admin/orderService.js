import { toast } from 'react-toastify';
import Service from '../axios';

export const getAllAdminOrderService=async()=>{
    try {
       const response=await Service.get("/api/v1/auth/all-orders");
       return response;
    } catch{
        toast.error("Something went wrong!");
    }
}


export const updateAdminOrderService=async(orderId,value)=>{
    try {
       const response=await Service.put(`/api/v1/auth/order-status/${orderId}`,{status: value});
       return response;
    } catch{
        toast.error("Something went wrong!");
    }
}
