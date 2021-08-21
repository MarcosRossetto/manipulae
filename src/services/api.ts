import axios from 'axios';

const api = axios.create({
  headers: {
    apiId: process.env.APP_ID,
  },
  baseURL: 'https://api.deezer.com/',
});

export default api;
