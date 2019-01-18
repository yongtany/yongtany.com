import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

// action types
const INITIALIZE = 'editor/INITIALIZE';
const CHANGE_INPUT = 'editor/CHANGE_INPUT';
const CHANGE_FILE_INPUT = 'editor/CHANGE_FILE_INPUT';
const WRITE_POST = 'editor/WRITE_POST';

// action creators
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);
export const changeFileInput = createAction(CHANGE_FILE_INPUT);
export const writePost = createAction(WRITE_POST, api.writePost);

// initial state
const initialState = Map({
  title: '',
  markdown: '',
  tags: '',
  postImage: '',
  postId: null
});

// reducer
export default handleActions({
  [INITIALIZE]: (state, action) => initialState,
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload;
    return state.set(name, value);
  },
  [CHANGE_FILE_INPUT]: (state, action) => {
    const { files } = action.payload;
    const file = files[0];

    return state.set('postImage', file);
  },

  ...pender({
    type: WRITE_POST,
    onSuccess : (state, action) => {
      const {_id } = action.payload.data;
      return state.set('postId', _id);
    }
  }),
}, initialState);
