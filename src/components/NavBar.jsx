import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);

    useEffect(() => {
        // Controlla se il token è presente in localStorage
        const token = localStorage.getItem("authToken");
        setIsLoggedIn(!!token);
    }, []);

    const toggleLoginForm = () => {
        setShowLoginForm((prevState) => !prevState);
    };

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        setShowLoginForm(false); // Nasconde il modulo di login
    };

    const handleLogout = () => {
        // Rimuovi il token
        localStorage.removeItem("authToken");
        setIsLoggedIn(false);
    };

    return (
        <div className="position-relative">


            <nav className="navbar navbar-expand-lg position-absolute">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler btn btn-light border border-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="bi bi-list text-light"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-navbar" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link text-warning" to="/">Home</NavLink>
                            <a href="#">Your Storages</a>
                            <NavLink className="nav-link text-warning" to="/profile">Your Profile</NavLink>
                            <NavLink className="nav-link text-warning" to="/about-us">About Us</NavLink>
                            <NavLink className="nav-link text-warning" to="/Donate">Donate</NavLink>
                            {isLoggedIn ? (
                                <button
                                    className="nav-link align-self-start text-warning"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            ) : (
                                <NavLink className="nav-link text-warning" to="/login">Login</NavLink>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
