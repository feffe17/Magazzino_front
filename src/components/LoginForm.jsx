import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className="login-form container bg-secondary-subtle mt-5 p-2 rounded">
            <form className="login-form row g-3">
                <div className="mb-2 col-md-6">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" />
                </div>
                <div className="mb-2 col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-2 col-12">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        className="form-control col-12"
                        id="password"
                    />
                    <div className="col-12 mt-2 d-flex justify-content-between">
                        <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                        <NavLink className="nav-link" to="/register">Non sei ancora registrato? Registrati qui!</NavLink>

                    </div>
                </div>
                <button type="submit" className="btn btn-primary col-11 mx-auto">Login</button>
            </form>
        </div>
    );
}
