import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

const GET_POST_LIST = 'list/GET_POST_LIST';

export const getPostList = createAction(GET_POST_LIST, 
      api.getPostList, meta => meta);

const initialState = Map({
      posts: List(),
      lastPage: 1,
      error: null
});

// reducer
export default handleActions({
      ...pender({
            type: GET_POST_LIST,
            onSuccess: (state, action) => {
                  const { data: posts } = action.payload;
                  const lastPage = action.payload.headers['last-page'];
                  //char to number
                  return state.set('posts', fromJS(posts))
                              .set('lastPage', (lastPage*1))
                              .set('error', null);
            },
            onError : (state, action) => {
                  const { message } = action.payload;
                  return state.set('error', message);
            }
      })
}, initialState)