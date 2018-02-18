import axios from 'axios';
import queryString from 'query-string';

const URL = process.env.REACT_APP_TEST_API;

export const getUsers = () => axios.get(URL + '/users');

export const writePost = ({title, body, tags}) => 
      axios.post('/api/v1.0/posts', {title, body, tags});

export const getPost = (id) => axios.get(`/api/v1.0/posts/${id}`)

export const getPostList = ({page}) =>
      axios.get(`/api/v1.0/posts?${queryString.stringify({ page })}`);

export const editPost = ({id, title, body, tags}) =>
       axios.patch(`/api/v1.0/posts/${id}`, { title, body, tags});

export const removePost = (id) =>
       axios.delete(`/api/v1.0/posts/${id}`);