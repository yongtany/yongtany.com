import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

// action types
const AUTH_SIGN_UP = 'auth/AUTH_SIGN_UP';
const AUTH_SIGN_IN = 'auth/AUTH_SIGN_IN';
const AUTH_SIGN_OUT = 'auth/AUTH_SIGN_OUT';
const AUTH_ERROR = 'auth/AUTH_ERROR';

// action creators
export const signUp = createAction(AUTH_SIGN_UP);
export const signIn = createAction(AUTH_SIGN_IN);
export const signOut = createAction(AUTH_SIGN_OUT);
export const authError = createAction(AUTH_ERROR);


// initial state
const initialState = Map({
  logged: false,// 현재 로그인 상태
  token: '',
  errorMessage: ''
});

// reducer
export default handleActions({
  ...pender({
    type: AUTH_SIGN_UP,
    onSuccess: (state, action) => {

    }
  })
}, initialState);
