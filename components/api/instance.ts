import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://bootcamp-api.codeit.kr/api/',
    timeout: 10000, 
    headers: {
        'Content-Type': 'application/json'
    }
});