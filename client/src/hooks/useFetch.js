import { useEffect, useState } from "react";
import Service from "../services/axios";

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [serverError, setServerError] = useState(null);
  
    useEffect(() => {
      setIsLoading(true);
      const fetchData = async () => {
        try {
          const resp = await Service.get(url);
          const data = await resp?.data;
          setApiData(data);
          setIsLoading(false);
        } catch (error) {
          setServerError(error);
          setIsLoading(false);
        }finally{
        setIsLoading(false);
        }
      };
  
      fetchData();
    }, [url]);
  
    return { isLoading, apiData, serverError };
  };

  export default useFetch;