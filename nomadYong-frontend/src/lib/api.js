import axios from 'axios';
import queryString from 'query-string';

// About Post
export const writePost = ({title, body, tags}) => axios.post('/posts', { title, body, tags });
export const getPost = (id) => axios.get(`/posts/${id}`);
export const getPostList = ({ tag, page }) => axios.get(`/posts/?${queryString.stringify({ tag, page })}`);
export const editPost = ({id, title, body, tags}) => axios.patch(`/posts/${id}`, { title, body, tags });
export const removePost = (id) => axios.delete(`/posts/${id}`);


// About User
export const signUp = ({email, name, username, password}) => axios.post('/users/signup', { email, name, username, password });
export const signIn = ({email, password}) => axios.post('/users/signin', { email, password });
export const facebookLogin = ({access_token}) => axios.post('/users/oauth/facebook', { access_token });
export const googleLogin = ({access_token}) => axios.post('/users/oauth/google', { access_token });
