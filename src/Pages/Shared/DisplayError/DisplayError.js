import { signOut } from 'firebase/auth';
import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom';
import auth from '../../../Firebase/firebase.config';

const DisplayError = () => {

    const error = useRouteError();
    const navigate = useNavigate();
    const handleLogOut = () => {
        signOut(auth);
          
                navigate('/login');
    }
  return (
    <div>
            <p className='text-red-500'>Something went wrong!!!</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h4 className="text-3xl"> Please <button onClick={handleLogOut}>Sign out</button> and log back in</h4>
        </div>
  )
}

export default DisplayError
