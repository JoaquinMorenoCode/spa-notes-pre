import axios from 'axios';
var errorMessage = "Could not connect to server. Please try again later.";


const api = axios.create({
    baseURL: 'http://localhost:8080/notes',
});

export   { api, errorMessage };