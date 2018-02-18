import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

//Actions Types
const SET_TOGGLE = 'base/SET_TOGGLE';
const SHOW_MODAL = 'base/SHOW_MODAL';
const HIDE_MODAL = 'base/HIDE_MODAL';

//Actions
export const setToggle = createAction(SET_TOGGLE); // {isOpen: boolean}
export const showModal = createAction(SHOW_MODAL); // modalName
export const hideModal = createAction(HIDE_MODAL); // modalName

const initialState = Map({
      isOpen: false,
      //modal visibility
      modal: Map({
            remove: false,
            login: false
      })
});

export default handleActions({
      [SET_TOGGLE] : (state, action) => {
           const { isOpen } = action.payload;
           return state.set('isOpen', isOpen );
      },
      [SHOW_MODAL]: (state, action) => {
            const { payload: modalName } = action;
            return state.setIn(['modal', modalName ], true);
      },
      [HIDE_MODAL]: (state, action) => {
            const { payload: modalName } = action;
            return state.setIn(['modal', modalName], false);  
      }
}, initialState)