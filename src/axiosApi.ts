import axios from 'axios';

export const axiosApi = axios.create({
  baseURL: 'http://api.tvmaze.com/shows/',
});
