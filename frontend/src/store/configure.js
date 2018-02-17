import { createStore, applyMiddleware, combineReducers} from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import penderMiddleware from 'redux-pender';
import * as modules from './modules';

const reducers = combineReducers(modules);

// preloadedState 는 추후 서버사이드 렌더링이 되었을 때 전달받는 초기상태입니다.
const configure = (preloadedState) =>{
      return createStore(reducers, preloadedState, composeWithDevTools(
                  applyMiddleware(
                        penderMiddleware(),
                  )
            )
      );
}

export default configure;
