import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

function UserProtectedRoute() {
    const { token, role } = useAuth();
    
    if (!token) {
        return <Navigate to="/login" />;
    }

    // Allow access only for users
    if (role !== "user") {
        alert('You are not an authorized user!!');
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}

export default UserProtectedRoute;
