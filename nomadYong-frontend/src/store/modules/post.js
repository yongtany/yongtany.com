import { createAction, handleActions } from 'redux-actions';

import { Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types
const GET_POST = 'post/GET_POST';

// action creators
export const getPost = createAction(GET_POST, api.getPost)

// initial state
const initialState = Map({});

// reducer
export default handleActions({

}, initialState);
