import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import base from './base';
import users from './users';

export default combineReducers({
      base,
      users,
      pender: penderReducer
});