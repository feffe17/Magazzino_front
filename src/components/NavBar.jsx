import { useState } from "react";
import { NavLink } from "react-router-dom";
import LoginForm from "./LoginForm";

export default function NavBar() {
    const [showLoginForm, setShowLoginForm] = useState(false);

    const toggleLoginForm = () => {
        setShowLoginForm((prevState) => !prevState);
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
                            <button
                                className="nav-link align-self-start"
                                onClick={toggleLoginForm}
                                aria-current="page"
                            >
                                Login
                            </button>
                            <NavLink className="nav-link" to="/about-us">About Us</NavLink>
                            <NavLink className="nav-link" to="/Donate">Donate</NavLink>
                            <NavLink className="nav-link" to="#">Prova</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
            {showLoginForm && <LoginForm />}
        </>
    );
}
