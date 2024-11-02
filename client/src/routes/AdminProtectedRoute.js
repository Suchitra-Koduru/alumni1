import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

function AdminProtectedRoute() {
    const { token, role } = useAuth();
    
    if (!token) {
        return <Navigate to="/login" />;
    }

    // Allow access only for admins
    if (role !== "admin") {
        alert('You are not an authorized admin!!');
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}

export default AdminProtectedRoute;
