import axios from 'axios';

// Use Render URL for production, localhost for development
const API_BASE_URL = window.location.hostname === 'organic-deliver-gzj6.vercel.app' 
  ? 'https://organic-deliver.onrender.com' 
  : 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
