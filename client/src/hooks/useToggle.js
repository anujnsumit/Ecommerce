import  { useCallback, useState } from 'react'

const useToggle = () => {
    const [state,setState]=useState(false);

    const toggle=useCallback(()=> setState(current=>!current),[]);
    
  return [state,toggle]
}

export default useToggle;