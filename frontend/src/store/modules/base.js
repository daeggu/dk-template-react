import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

//Actions Types
const SET_TOGGLE = 'base/SET_TOGGLE';

//Actions
export const setToggle = createAction(SET_TOGGLE); // {isOpen: boolean}

const initialState = Map({
      isOpen: false
});

export default handleActions({
      [SET_TOGGLE] : (state, action) => {
           const { isOpen } = action.payload;
           return state.set('isOpen', isOpen );
      },
}, initialState)