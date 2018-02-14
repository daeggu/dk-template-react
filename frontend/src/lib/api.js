import axios from 'axios';

const URL = process.env.REACT_APP_API_URL;

export const getUsers = () => axios.get(URL + '/users');