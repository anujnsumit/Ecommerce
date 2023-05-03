
import { toast } from 'react-toastify';
import Service from '../axios';


export const paymentTokenService=async(params)=>{
    try {
       const response=await Service.get('/api/v1/product/braintree/token');
       if(response?.data?.success){
        toast.success("token successfully!");
       }else{
        toast.error(response?.data?.error);
       }
       return response;
    } catch{
        toast.error("Something went wrong!");
    }
}

export const paymentService=async(nonce,cart)=>{
    try {
       const response=await Service.post('/api/v1/product/braintree/payment',{ nonce,
        cart});
       if(response?.data?.success){
        toast.success("user register successfully!");
       }else{
        toast.error(response?.data?.error);
       }
       return response;
    } catch{
        toast.error("Something went wrong!");
    }
}