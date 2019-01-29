import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types
const GET_POST_LIST = 'list/GET_POST_LIST';
const GET_RECENT_LIST = 'list/GET_RECENT_LIST';

// action creators
export const getPostList = createAction(GET_POST_LIST, api.getPostList);
export const getRecentList = createAction(GET_RECENT_LIST, api.getRecentList);

// initial state
const initialState = Map({
  posts: List(),
  recentPosts: List(),
  lastPage: null
});

// reducer
export default handleActions({
  ...pender({
    type: GET_POST_LIST,
    onSuccess: (state, action) => {
      const { data: posts } = action.payload;

      const lastPage = action.payload.headers['last-page'];
      return state.set('posts', fromJS(posts))
                  .set('lastPage', parseInt(lastPage, 10))
    }
  }),

  ...pender({
    type: GET_RECENT_LIST,
    onSuccess: (state, action) => {
      const { data: recentPosts } = action.payload;

      return state.set('recentPosts', fromJS(recentPosts))
    }
  }),
}, initialState);
