import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider.jsx/AuthProvider';
import { FadeLoader } from 'react-spinners';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateProvider = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <FadeLoader color="#36d7b7" />
    }
    if(user){
        return children
    }

    return <Navigate to='/login' state={{from : location}} replace ></Navigate>
};

export default PrivateProvider;