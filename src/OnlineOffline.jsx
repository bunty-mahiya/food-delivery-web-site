import { useEffect, useState } from "react"

const useOnline = () => {

    const[internetStatus,setinternetStatus]=useState(true)

    useEffect(()=>{
      const hendleOnline=()=>setinternetStatus(true)
      const hendleOfline=()=>setinternetStatus(false)
    window.addEventListener("online",hendleOnline)
    window.addEventListener("offline",hendleOfline)
    return()=>{
      window.removeEventListener("online",hendleOnline)
      window.removeEventListener("offline",hendleOfline)
    }
    },[])
    
    
  return internetStatus
}

export default useOnline