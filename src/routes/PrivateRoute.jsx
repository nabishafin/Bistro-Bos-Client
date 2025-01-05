import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../shared/LoadingSpinner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // Show loading spinner while authentication status is being determined
    if (loading) return <LoadingSpinner />;

    // If the user is authenticated, render the children components
    if (user) return children;

    // Redirect to login page if user is not authenticated
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;