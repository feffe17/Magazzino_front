import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LoginForm from "./LoginForm";

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
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/about-us">About Us</NavLink>
                            <NavLink className="nav-link" to="/Donate">Donate</NavLink>
                            {isLoggedIn ? (
                                <button
                                    className="nav-link align-self-start"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            ) : (
                                <button
                                    className="nav-link align-self-start"
                                    onClick={toggleLoginForm}
                                >
                                    Login
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            {showLoginForm && <LoginForm onLoginSuccess={handleLoginSuccess} />}
        </>
    );
}
