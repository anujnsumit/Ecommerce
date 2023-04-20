import { useState, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { adminCheckService } from "../../services/auth/loginCheck";
import { useAuth } from "../../context/auth";
import Loading from "../Layout/Loading";

export default function AdminRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();
  const location = useLocation();
  const authToken = localStorage.getItem('auth');
  const isLogin = JSON.parse(authToken);

  useEffect(() => {
    const authCheck = async () => {
      const res = await adminCheckService();
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

  if (isLogin?.token && isLogin.role!==1) {
    return (<Navigate to="/login" state={location?.pathname} />);
  }
  
  return ok ? <Outlet /> : <Loading />;
}