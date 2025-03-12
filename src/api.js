import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000", // Your backend URL
    withCredentials: true, // If using authentication
});

export default API;
