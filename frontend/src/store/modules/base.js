import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

//Actions Types
const SET_TOGGLE = 'base/SET_TOGGLE';
const SHOW_MODAL = 'base/SHOW_MODAL';
const HIDE_MODAL = 'base/HIDE_MODAL';

const LOGIN = 'base/LOGIN';
const LOGOUT = 'base/LOGOUT';
const CHECK_LOGIN ='base/CHECK_LOGIN';
const CHANGE_PASSWORD_INPUT = 'base/CHANGE_PASSWORD_INPUT';
const INITIALIZE_LOGIN_MODAL = 'base/INITIALIZE_LOGIN_MODAL';

//check API 사용하기 전까지 local사용
const TEMP_LOGIN = 'base/TEMP_LOGIN';

//Actions
export const setToggle = createAction(SET_TOGGLE); // {isOpen: boolean}
export const showModal = createAction(SHOW_MODAL); // modalName
export const hideModal = createAction(HIDE_MODAL); // modalName

export const login = createAction(LOGIN, api.login);
export const logout = createAction(LOGOUT, api.logout);
export const checkLogin = createAction(CHECK_LOGIN, api.checkLogin);
export const changePasswordInput = createAction(CHANGE_PASSWORD_INPUT);
export const initializeLoginModal = createAction(INITIALIZE_LOGIN_MODAL);
export const tempLogin = createAction(TEMP_LOGIN);

const initialState = Map({
      isOpen: false,
      //modal visibility
      modal: Map({
            remove: false,
            login: false
      }),
      //로그인 모달 상태
      loginModal: Map({
            password: '',
            error: false
      }),
      logged: false //현재 로그인 상태
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
      },
      ...pender({
            type:LOGIN,
            onSuccess: (state, action) => {
                  return state.set('logged', true);
            },
            onError : (state, action) => {
                  return state.setIn(['loginModal', 'error'], true)
                              .setIn(['loginModal', 'password'], '');
            }
      }),
      ...pender({
            type: CHECK_LOGIN,
            onSuccess: (state, action) => {
              const { logged } = action.payload.data;
              return state.set('logged', logged);
            }
        }),
      [CHANGE_PASSWORD_INPUT]: (state, action) => {
            const { payload : value} = action;
            return state.setIn(['loginModal', 'password'], value);
      },
      [INITIALIZE_LOGIN_MODAL] : (state, action) => {
            return state.set('loginModal', initialState.get('loginModal'));
      },
      [TEMP_LOGIN]: (state, action) => {
            return state.set('logged', true);
      }
      
}, initialState)