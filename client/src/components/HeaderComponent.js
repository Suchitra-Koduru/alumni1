import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

function HeaderComponent() {
    const auth = useAuth();  
    const navigate = useNavigate();

    if (!auth) {
        return null;
    }

    const { token, logout } = auth;

    function handleLogin(e) {
        e.preventDefault();
        navigate('/login');
    }

    function handleSignup(e) {
        e.preventDefault();
        navigate('/signup');
    }

    function handleProfile(e) {
        e.preventDefault();
        navigate('/profile');
    }

    function handleLogout(e) {
        e.preventDefault();
        logout();
    }

    function handleHome(e) {
        e.preventDefault();
        navigate('/');
    }

    function handleSearch(e) {
        e.preventDefault();
        navigate('/search');
    }

    return (
        <>
            <div className='d-flex container-fluid fixed-top d-flex align-items-center' style={{ height: "60px", backgroundColor: "#6a0dad" }}>
                <div className='p-2 d-flex align-items-center h1 m-0 text-white'
                    onClick={handleHome} style={{ fontFamily: "'Srisakdi', cursive", color: "#e0b0ff" }}>
                    <span>Memories</span>
                </div>
                <ul className="container-fluid d-inline-flex flex-wrap h5 flex-row-reverse py-2 align-items-center m-0 gap-4" style={{ listStyleType: "none", flexGrow: 1 }}>
                    <li className="nav-item" onClick={() => navigate('/aboutUs')} style={{ color: "#e0b0ff" }}>About us</li>
                    <li className="nav-item" onClick={handleHome} style={{ color: "#e0b0ff" }}>Home</li>
                    <li className='nav-item' onClick={handleSearch} style={{ color: "#e0b0ff" }}><FaSearch /></li>
                </ul>
                <div className='container-fluid d-inline-flex flex-wrap flex-row-reverse py-2 align-items-center m-0 w-auto' style={{ minWidth: "fit-content" }}>
                    {token == null ?
                        <div className='float-right px-2 flex'>
                            <button className='btn btn-light me-2' onClick={handleLogin} style={{ backgroundColor: "#9b59b6", color: "white" }}>Login</button>
                            <button className='btn btn-primary' onClick={handleSignup} style={{ backgroundColor: "#8e44ad", borderColor: "#8e44ad" }}>Sign-up</button>
                        </div>
                        :
                        <div className='float-right px-2'>
                            <IoPersonCircleSharp size={30} className="me-2" style={{ color: '#e0b0ff' }} onClick={handleProfile} />
                            <button className='btn btn-primary' onClick={handleLogout} style={{ backgroundColor: "#8e44ad", borderColor: "#8e44ad" }}>Logout</button>
                        </div>}
                </div>
            </div>
        </>
    );
}

export default HeaderComponent;
