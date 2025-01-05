import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import api from "../context/apiContext"; // Importa l'istanza di Axios

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate(); // Inizializza useNavigate

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Le password non corrispondono.");
            setSuccess("");
            return;
        }

        // Raccogli i dati del form
        const userData = {
            Username: document.getElementById("username").value,
            Nome: document.getElementById("nome").value,
            Cognome: document.getElementById("cognome").value,
            Email: document.getElementById("email").value,
            Password: password,
        };

        try {
            // Invia i dati al backend con Axios
            const response = await api.post("/users", userData);

            // Mostra il messaggio di successo
            setSuccess(response.data.message);
            setError(""); // Resetta eventuali errori precedenti

            // Reindirizza alla home page dopo 2 secondi
            setTimeout(() => {
                navigate("/"); // "/": la route della home page
            }, 2000);
        } catch (err) {
            // Gestione degli errori
            if (err.response) {
                // Errore dal backend (es. 400, 500)
                setError(err.response.data.error || "Errore sconosciuto.");
            } else {
                // Errore di rete o altro
                setError("Errore durante la comunicazione con il server.");
            }
            setSuccess("");
        }
    };

    return (
        <>
            <main>
                <div className="login-form container bg-secondary-subtle mt-5 p-2 rounded">
                    <form className="login-form row g-3" onSubmit={handleSubmit}>
                        <div className="mb-2 col-md-6">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" required />
                        </div>
                        <div className="mb-2 col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" required />
                        </div>
                        <div className="mb-2 col-md-6">
                            <label htmlFor="nome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="nome" required />
                        </div>
                        <div className="mb-2 col-md-6">
                            <label htmlFor="cognome" className="form-label">Cognome</label>
                            <input type="text" className="form-control" id="cognome" required />
                        </div>
                        <div className="col-12">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
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
                            <div className="col-12 text-danger text-center">
                                {error}
                            </div>
                        )}
                        {success && (
                            <div className="col-12 text-success text-center">
                                {success} Reindirizzamento in corso...
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
