import axios from "axios";

const baseURL = "http://localhost:5000/mostrar";

const api = axios.create({baseURL});
const mostrar = axios.get(baseURL);

export default api;
