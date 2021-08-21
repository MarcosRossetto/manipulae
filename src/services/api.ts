import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.deezer.com/',
});

export default api;
