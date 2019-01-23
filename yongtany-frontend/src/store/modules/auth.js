import { createAction, handleActions } from 'redux-actions';
import * as api from 'lib/api';
import axios from 'axios';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

// action types
const AUTH_SIGN_UP = 'auth/AUTH_SIGN_UP';
const AUTH_SIGN_IN = 'auth/AUTH_SIGN_IN';
const AUTH_SIGN_OUT = 'auth/AUTH_SIGN_OUT';

// action creators
export const signUp = createAction(AUTH_SIGN_UP, api.signUp);
export const signIn = createAction(AUTH_SIGN_IN, api.signIn);
export const googleLogin = createAction(AUTH_SIGN_IN, api.googleLogin);
export const facebookLogin = createAction(AUTH_SIGN_IN, api.facebookLogin);
export const signOut = createAction(AUTH_SIGN_OUT);


// initial state
const initialState = Map({
  isLoggedIn: localStorage.getItem("jwt") ? true : false,
  token: localStorage.getItem("jwt"),
  name: localStorage.getItem('name'),
  _id : localStorage.getItem('_id'),
  profile_image: localStorage.getItem('profile_image'),
  errorMessage: ''
});

// reducer
export default handleActions({
  ...pender({
    type: AUTH_SIGN_UP,
    onSuccess: (state, action) => {
      const { token, newUser  } = action.payload.data;
      const { name, profile_image, id } = newUser;

      localStorage.setItem("jwt", token);
      localStorage.setItem("name", name);
      localStorage.setItem("_id", id);
      localStorage.setItem("profile_image", profile_image);
      return state.set('isLoggedIn', true)
                  .set('token', token)
                  .set('name', name)
                  .set('profile_image', profile_image)
                  .set('_id', newUser._id)
    },
    onError: (state, action) => {
      return state.set('errorMessage', 'Sign up Faild')
    }
  }),
  ...pender({
    type: AUTH_SIGN_IN,
    onSuccess: (state, action) => {
      const { token, user } = action.payload.data;
      const { name, profile_image, id } = user
      localStorage.setItem("jwt", token);
      localStorage.setItem("name", name);
      localStorage.setItem("_id", id);
      localStorage.setItem("profile_image", profile_image);
      axios.defaults.headers.common['Authorization'] = action.payload.data.token;
      return state.set('isLoggedIn', true)
                  .set('token', token)
                  .set('name', name)
                  .set('profile_image', profile_image)
                  .set('_id', user._id);
    },
    onError: (state, action) => {
      return state.set('errorMessage', 'Sign in Faild')
    }
  }),
  [AUTH_SIGN_OUT] : (state, action) => {
    localStorage.clear();
    return state.set('isLoggedIn', false)
                .set('name', null)
                .set('token', null)
                .set('_id', null)
                .set('profile_image', null)
  },
}, initialState);
