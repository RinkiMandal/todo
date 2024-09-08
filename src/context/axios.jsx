import axios from "axios";

const instance = axios.create({
    baseURL: "https://todo-backend-ht4t.onrender.com"
});

export default instance;