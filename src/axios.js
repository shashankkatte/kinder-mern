import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://kinder-backend.herokuapp.com',
});

export default instance;
