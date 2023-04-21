import { toast } from 'react-toastify';
import Service from '../axios';

const userCheckService=async()=>{
    try {
       const response=await Service.get('api/v1/auth/user-auth');
       return response;
    } catch{
        toast.error("Something went wrong!");
    }
}

const adminCheckService=async()=>{
    try {
       const response=await Service.get('api/v1/auth/admin-auth');
       return response;
    } catch{
        toast.error("Something went wrong!");
    }
}

export {userCheckService,adminCheckService};