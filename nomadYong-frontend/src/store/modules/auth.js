import { createAction, handleActions } from 'redux-actions';
import * as api from 'lib/api';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

// action types
const AUTH_SIGN_UP = 'auth/AUTH_SIGN_UP';
const AUTH_SIGN_IN = 'auth/AUTH_SIGN_IN';
const AUTH_SIGN_OUT = 'auth/AUTH_SIGN_OUT';
const AUTH_ERROR = 'auth/AUTH_ERROR';

// action creators
export const signUp = createAction(AUTH_SIGN_UP, api.signUp);
export const signIn = createAction(AUTH_SIGN_IN, api.signIn);
export const signOut = createAction(AUTH_SIGN_OUT);
export const authError = createAction(AUTH_ERROR);


// initial state
const initialState = Map({
  isLoggedIn: localStorage.getItem("jwt") ? true : false,
  token: localStorage.getItem("jwt"),
  name: localStorage.getItem('name'),
  errorMessage: ''
});

// reducer
export default handleActions({
  ...pender({
    type: AUTH_SIGN_UP,
    onSuccess: (state, action) => {
      const { token, newUser  } = action.payload.data;
      const name = newUser.name;

      localStorage.setItem("jwt", token);
      localStorage.setItem("name", name);
      return state.set('isLoggedIn', true)
                  .set('token', token)
                  .set('name', name);
    },
    onError: (state, action) => {
      return state.set('errorMessage', 'Sign up Faild')
    }
  }),
  ...pender({
    type: AUTH_SIGN_IN,
    onSuccess: (state, action) => {
      const { token, user } = action.payload.data;
      const name = user.name;
      localStorage.setItem("jwt", token);
      localStorage.setItem("name", name);
      return state.set('isLoggedIn', true)
                  .set('token', token)
                  .set('name', name);
    },
    onError: (state, action) => {
      return state.set('errorMessage', 'Sign in Faild')
    }
  }),
  [AUTH_SIGN_OUT] : (state, action) => {
    localStorage.clear();
    return state.set('isLoggedIn', false)
                .set('name', null)
                .set('token', null);
  },
}, initialState);
