import Service from '../axios';


const registerUser=async()=>{
    try {
       const response=await Service.post();
       return response;
    } catch{
        console.log("error")
    }
}

export {registerUser};