import { createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'; 
//import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import penderMiddleware from 'redux-pender';
import * as modules from './modules';

const reducers = combineReducers(modules);

const configure = (preloadedState) =>{
      return createStore(reducers, preloadedState, composeWithDevTools(
                  applyMiddleware(
                        penderMiddleware(),
                  )
            )
      );
}

export default configure;
