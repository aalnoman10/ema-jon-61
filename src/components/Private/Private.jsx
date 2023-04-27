import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    console.log(location);
    if (loading) {
        return <h1>Loading...</h1>
    }
    else if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace={true}></Navigate>
};

export default Private;