import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../shared/LoadingSpinner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) return <LoadingSpinner />
    if (user) return children
    return <Navigate to='/login' state={location.pathname} />;
};

export default PrivateRoute;