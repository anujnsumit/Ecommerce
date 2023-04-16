
import { Navigate,Outlet,useLocation } from "react-router-dom";

const PrivateRoutes=()=>{
    const location=useLocation();
    const authToken=localStorage.getItem('auth');
    const isLogin=JSON.parse(authToken);
    
    if (!isLogin.token) {
        return (<Navigate to="/login" state={location?.pathname}/>);
    }
    
    return (
    <>
    <Outlet/>
    </>
    );
}

export default PrivateRoutes;