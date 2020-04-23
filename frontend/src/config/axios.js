import axios from 'axios';

const clienteAxios = axios.create({

    //La variable de entorno gracias a axios. En el archivo .env.development
    baseURL: process.env.REACT_APP_BACKEND_URL  
    



})




export default clienteAxios;