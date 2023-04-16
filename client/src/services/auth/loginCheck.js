import { toast } from 'react-toastify';
import Service from '../axios';

const loginCheckService=async()=>{
    try {
       const response=await Service.get('api/v1/auth/user-auth');
       return response;
    } catch{
        toast.error("Something went wrong!");
    }
}
export {loginCheckService};