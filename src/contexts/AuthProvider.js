import { getAuth } from 'firebase/auth'
import React, { createContext } from 'react'
import app from '../Firebase/firebase.config'
const AuthProvider = () => {
    const Authcontext =createContext()
    const auth =getAuth(app)
  return (
    <div>
      
    </div>
  )
}

export default AuthProvider
