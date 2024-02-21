import axios from 'axios';

const http = axios.create({
    baseURL: "",
    timeout: 30000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});



export default http;
