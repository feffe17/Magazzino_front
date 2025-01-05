import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3002/", // URL base del tuo backend
    headers: {
        "Content-Type": "application/json", // Imposta il tipo di contenuto predefinito
    },
});

export default api;
