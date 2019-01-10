import axios from 'axios';
import queryString from 'query-string';

export const writePost = ({title, body, tags}) => axios.post('/posts', { title, body, tags });
export const getPost = (id) => axios.get(`/posts/${id}`);
export const getPostList = ({ tag, page }) => axios.get(`/posts/?${queryString.stringify({ tag, page })}`);
export const editPost = ({id, title, body, tags}) => axios.patch(`/posts/${id}`, { title, body, tags });
export const removePost = (id) => axios.delete(`/posts/${id}`);

export const signUp = ({email, name, username, password}) => axios.post('/users/signup', { email, name, username, password });
