import axios from 'axios';
import environment from '../config/env';

const api = axios.create({
  baseURL: environment.apiUrl,
});

export default api;
