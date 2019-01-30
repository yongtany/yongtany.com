import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'config/api';

// action types
const INITIALIZE = 'editor/INITIALIZE';
const CHANGE_INPUT = 'editor/CHANGE_INPUT';
const CHANGE_FILE_INPUT = 'editor/CHANGE_FILE_INPUT';
const WRITE_POST = 'editor/WRITE_POST';
const GET_POST = 'editor/GET_POST';
const EDIT_POST = 'editor/EDIT_POST';

// action creators
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);
export const changeFileInput = createAction(CHANGE_FILE_INPUT);
export const writePost = createAction(WRITE_POST, api.writePost);
export const getPost = createAction(GET_POST, api.getPost);
export const editPost = createAction(EDIT_POST, api.editPost);

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
      const { _id } = action.payload.data;
      return state.set('postId', _id);
    }
  }),
  ...pender({
    type: GET_POST,
    onSuccess: (state, action) => {
        const {title, tags, body, postImage } = action.payload.data;
        return state.set('title', title)
                    .set('markdown', body)
                    .set('tags', tags.join(', ')) // 배열 -> ,로 구분된 문자열
                    .set('postImage', postImage)
    }
})
}, initialState);
