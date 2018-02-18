import { createAction, handleActions } from 'redux-actions';

import { Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

const GET_POST = 'post/GET_POST';

export const getPost = createAction(GET_POST, api.getPost);

const initialState = Map({
      post : Map({})
});

export default handleActions({
      ...pender({
            type: GET_POST,
            onSuccess: (state, action)=> {
                  const { data : post } = action.payload;
                  return state.set('post', fromJS(post));
            }
      })

}, initialState)