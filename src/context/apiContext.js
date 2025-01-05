import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3002/", // URL base del tuo backend
    headers: {
        "Content-Type": "application/json", // Imposta il tipo di contenuto predefinito
    },
});

// Interceptor per aggiungere il token alle richieste
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("authToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
