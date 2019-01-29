import axios from 'axios';
import queryString from 'query-string';

// About Post
export const writePost = (formData, token) => axios.post('/posts/', formData, {headers: {'Authorization': `${token}`, 'content-type': 'multipart/form-data'}});
export const getPost = (id) => axios.get(`/posts/${id}`);
export const getPostList = ({ tag, page }) => axios.get(`/posts/?${queryString.stringify({ tag, page })}`);
export const editPost = (id, jsonObject, token) => axios.patch(`/posts/${id}`, jsonObject, {headers: {'Authorization': `${token}`, 'Content-Type': 'application/json'}});
export const removePost = (id, token) => axios.delete(`/posts/${id}`, {headers: {'Authorization': `${token}`}});
export const getRecentList = () => axios.get('/posts/recent');


// About User
export const signUp = ({email, name, username, password}) => axios.post('/users/signup', { email, name, username, password });
export const signIn = ({email, password}) => axios.post('/users/signin', { email, password });
export const facebookLogin = ({access_token}) => axios.post('/users/oauth/facebook', { access_token });
export const googleLogin = ({access_token}) => axios.post('/users/oauth/google', { access_token });
