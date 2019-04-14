import React from "react";
// import axios from "axios";


// const api = axios.create({baseURL});

const baseURL = "http://localhost:5000";

const Mostrar = () => {
  return axios.get(baseURL)
  .then(response => {response.data})
  .catch(() => { console.log('Erro ao recuperar os dados'); });
};

export default Mostrar;
