import axios from 'axios';
// config
const HOST_API_KEY = 'http://localhost:3000/api/';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: HOST_API_KEY,
  headers: {
  'Content-Type': 'multipart/form-data'
} });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
