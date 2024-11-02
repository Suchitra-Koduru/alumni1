import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

function AlumniProtectedRoute() {
    const { token, role } = useAuth();
    
    if (!token) {
        return <Navigate to="/login" />;
    }

    // Allow access only for alumni
    if (role !== "alumni") {
        alert('You are not an authorized alumni!!');
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}

export default AlumniProtectedRoute;
