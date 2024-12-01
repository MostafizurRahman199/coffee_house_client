import React from 'react'
import { useFirebaseAuth } from '../Providers/AuthProvider'
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {loading, user} = useFirebaseAuth();

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>;
    }
    if(!user){
        return <Navigate to="/signin" replace={true}/>;
    }
  return (
    <div>{children}</div>
  )
}

export default PrivateRoutes