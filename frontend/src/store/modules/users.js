import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import { Map, List, fromJS } from 'immutable';
import * as api from 'lib/api';

const GET_USERS = 'users/GET_USERS';

export const getUsers = createAction(GET_USERS, api.getUsers);

const initialState = Map({
      data : List(),
      error : null
});

export default handleActions ({
      ...pender({
            type: GET_USERS,
            onSuccess: (state, action)=> {
                  const { data } = action.payload
                return state.set('data', fromJS(data))
            },
            
      })

}, initialState);