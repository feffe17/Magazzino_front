import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const toggleLoginForm = () => {
        setShowLoginForm((prevState) => !prevState);
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
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
            {showLoginForm && (
                <div className="login-form container bg-secondary-subtle mt-5 p-2 rounded">
                    <form className="login-form row g-3">
                        <div className="mb-3 col-md-6">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" />
                        </div>
                        <div className="mb-3 col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="mb-3 position-relative">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                id="password"
                            />
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary mt-2"

                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                        <button type="submit" className="btn btn-primary col-11 mx-auto">Login</button>
                    </form>
                </div>
            )}
        </>
    );
}
