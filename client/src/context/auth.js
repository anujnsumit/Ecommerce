import { useState,createContext, useContext, useEffect } from "react";

const AuthContext=createContext();

const AuthProvider=({children})=>{
    const [auth,setAuth]=useState({user:null,token:""});

    useEffect(()=>{
        let data=localStorage.getItem("auth");
        if(data){
            const {user,token}=JSON.parse(data);
            setAuth({
                ...auth,
                user:(user),
                token:JSON.parse(token)
            })
        }
    },[auth])

    return (
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth=()=>useContext(AuthContext);

export {useAuth,AuthProvider};