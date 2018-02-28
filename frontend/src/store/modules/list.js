import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

const GET_POST_LIST = 'list/GET_POST_LIST';
const SET_SELECTED_POST = 'list/SET_SELECTED_POST';
const SET_PAGE = 'list/SET_PAGE';

export const getPostList = createAction(GET_POST_LIST, 
      api.getPostList, meta => meta);

export const setSelectedPost = createAction(SET_SELECTED_POST);
export const setPage = createAction(SET_PAGE);

const initialState = Map({
      posts: List(),
      lastPage: 1,
      error: null,
      selected: Map({
            index: 0,
            id: null,
            page: 1
      })
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
      }),
      [SET_SELECTED_POST] : (state, action ) => {
            const { index, id } = action.payload
            return state.setIn(['selected', 'index'], index)
                        .setIn(['selected', 'id'], id);
      },
      [SET_PAGE] : (state, action ) => {
            const page = action.payload
            return state.setIn(['selected', 'page'], page);
      }
}, initialState)