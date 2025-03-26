import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {currentUser, loading} = useAuth();

    if(loading) {
        return <div>Loading..</div>
    }   //keeps user in even after refreshing the page
    if(currentUser) {
        return children;
    }   //if user loggd in we show the childre(page) else rdiract to login page
  
    return <Navigate to="/login" replace/>
}

export default PrivateRoute