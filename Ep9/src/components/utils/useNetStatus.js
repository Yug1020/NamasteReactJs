import { useEffect } from "react";

const useNetStatus = () => {

//There are methods to check online status
    //First one
    const online_status = navigator.onLine
    
    //second one
        //empty

    
    useEffect( () => {
    },[online_status])
    
    return online_status;
}

export default useNetStatus; 