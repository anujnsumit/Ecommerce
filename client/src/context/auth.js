import { useState,createContext, useContext, useEffect } from "react";

const AuthContext=createContext();

const AuthProvider=({children})=>{
    const [auth,setAuth]=useState({user:null,token:""});
    const [data,setData]=useState([]);

    useEffect(()=>{
        let data=localStorage.getItem("auth");
        if(data){
            const {user,token}=JSON.parse(data);
            setAuth({
                ...auth,
               user,
               token
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <AuthContext.Provider value={[auth,setAuth,setData,data]}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth=()=>useContext(AuthContext);

export {useAuth,AuthProvider};