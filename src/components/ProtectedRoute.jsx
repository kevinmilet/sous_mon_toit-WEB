import React from 'react';

const ProtectedRoute = ({ component: Component }) => {
    const isAuthenticated = localStorage.getItem('isAuth');
    console.log("this", isAuthenticated);
    return (
        <div>

        </div>
    );
};

export default ProtectedRoute;
