import { createAction, handleActions } from 'redux-actions';

import { Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

const GET_POST = 'post/GET_POST';
const REMOVE_POST = 'post/REMOVE_POST';

export const getPost = createAction(GET_POST, api.getPost);
export const removePost = createAction(REMOVE_POST, api.removePost);

const initialState = Map({
      post : Map({}),
});

export default handleActions({
      ...pender({
            type: GET_POST,
            onSuccess: (state, action)=> {
                  const { data : post } = action.payload;
                  return state.set('post', fromJS(post));
            }
      }),
}, initialState)