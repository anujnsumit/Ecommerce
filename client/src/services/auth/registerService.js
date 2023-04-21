import { toast } from 'react-toastify';
import Service from '../axios';


const registerUserService=async(params)=>{
    try {
       const response=await Service.post('/api/v1/auth/register',{...params});
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

export {registerUserService};