import axios from 'axios';

const api = axios.create({
  headers: {
    apiId: process.env.APP_ID,
  },
  baseURL: 'http://api.deezer.com/',
});

export default api;
