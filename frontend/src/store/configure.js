import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import penderMiddleware from 'redux-pender';
import modules from './modules';

const configureStore = (initialState) => {
      const store = createStore(modules, initialState, composeWithDevTools(
            applyMiddleware(
                  penderMiddleware(),
            )
      ));
      return store;
}

export default configureStore;