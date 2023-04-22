import { useState, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { userCheckService } from "../../services/auth/loginCheck";
import { useAuth } from "../../context/auth";
import Loading from "../Layout/Loading";

export default function PrivateRoute() {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();
    const location = useLocation();
    const authToken = localStorage.getItem('auth');
    const isLogin = JSON.parse(authToken);

    useEffect(() => {
        const authCheck = async () => {
            const res = await userCheckService();
            if (res.data.ok) {
                setOk(true);
            } else {
                setOk(false);
            }
        };
        if (auth?.token) authCheck();
    }, [auth?.token]);

    if (!isLogin?.token) {
        return (<Navigate to="/login" state={location?.pathname} />);
      }
      
    return ok ? <Outlet /> : <Loading />;
}