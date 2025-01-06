import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../context/apiContext";

export default function Login({ onLoginSuccess }) {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/login", { username, password });

            const { token } = response.data;

            // Salva il token in localStorage
            localStorage.setItem("authToken", token);

            // Mostra un messaggio di successo
            setSuccess("Login effettuato con successo! Reindirizzamento in corso...");
            setError(""); // Resetta eventuali errori precedenti

            // Notifica il successo al componente genitore (opzionale)
            onLoginSuccess?.();

            // Reindirizza alla home dopo 2 secondi
            setTimeout(() => {
                navigate("/");
            }, 2000);
        } catch (err) {
            setError("Credenziali non valide.");
            setSuccess(""); // Resetta eventuali messaggi di successo
        }
    };

    return (
        <div className="login-form container bg-secondary-subtle mt-5 p-2 rounded">
            <form className="login-form row col-md-6 mx-auto g-3" onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-2 col-12">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        className="form-control col-12"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="col-12 mt-2 d-flex justify-content-between">
                        <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? "Nascondi" : "Mostra"}
                        </button>
                    </div>
                </div>
                {error && (
                    <div className="text-danger text-center">{error}</div>
                )}
                {success && (
                    <div className="text-success text-center">{success}</div>
                )}
                <button type="submit" className="btn btn-primary col-11 mx-auto">Login</button>
            </form>
        </div>
    );
}
