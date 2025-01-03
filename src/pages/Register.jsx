import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Previene il comportamento predefinito del form
        if (password !== confirmPassword) {
            setError("Le password non corrispondono.");
        } else {
            setError("");
            // Logica per registrare l'utente
            console.log("Form inviato con successo!");
        }
    };

    return (
        <>
            <main>
                <div className="login-form container bg-secondary-subtle mt-5 p-2 rounded">
                    <form className="login-form row g-3" onSubmit={handleSubmit}>
                        <div className="mb-2 col-md-6">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" />
                        </div>
                        <div className="mb-2 col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-2 col-12">
                            <label htmlFor="confirmPassword" className="form-label">Conferma Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <div className="col-12 mt-2 d-flex justify-content-between">
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-secondary"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>
                        {error && (
                            <div className="col-12 text-danger text-center">
                                {error}
                            </div>
                        )}
                        <button type="submit" className="btn btn-primary col-11 mx-auto">
                            Registrati
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
}
