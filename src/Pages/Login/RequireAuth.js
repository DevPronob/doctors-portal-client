import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.config';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth)
    const location = useLocation();
    if(loading){
        return <h1>Loading ...</h1>
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth
