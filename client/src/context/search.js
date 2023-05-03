import { createContext, useContext, useState } from "react";

const SearchContext=createContext();

const SearchProvider=({children})=>{
    const [state,setState]=useState({keyword:"",results:[]});

    return <SearchContext.Provider value={[state,setState]}>
        {children}
    </SearchContext.Provider>
}

const useSearch=()=>useContext(SearchContext)

export  {SearchProvider,useSearch};