import { useState } from "react";

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
                <div className="mb-2 position-relative">
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
    );
}
