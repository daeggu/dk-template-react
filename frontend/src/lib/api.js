import axios from 'axios';

const URL = process.env.REACT_APP_TEST_API;

export const getUsers = () => axios.get(URL + '/users');
export const writePost = ({title, body, tags}) => 
      axios.post('/api/v1.0/posts', {title, body, tags});