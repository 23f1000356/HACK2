import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000", // Backend URL
    withCredentials: true, // If using authentication
});

export default API;

/*import axios from 'axios';

const API = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

export default API;
 */