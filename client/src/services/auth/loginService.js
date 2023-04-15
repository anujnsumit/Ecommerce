import { toast } from 'react-toastify';
import Service from '../axios';

const loginUserService=async(params)=>{
    try {
       const response=await Service.post('/api/v1/auth/login',{...params});
       if(response?.data?.success){
        toast.success("user login successfully!");
       }else{
        toast.error(response?.data?.error);
       }
       return response;
    } catch{
        toast.error("Something went wrong!");
    }
}
export {loginUserService};