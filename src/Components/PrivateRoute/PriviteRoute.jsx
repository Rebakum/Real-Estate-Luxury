import { useContext,  } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PriviteRoute = ({children}) => {
    const {currentUser, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <h1 className="4xl">loading...</h1>
    }
  
    if(!currentUser){
        return <Navigate to='/login' state = {location?.pathname || '/'} ></Navigate>
    }
    
    return (
        <div >
          {children}
        </div>
    );
};

export default PriviteRoute;
