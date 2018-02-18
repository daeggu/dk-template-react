import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Root from 'containers/Root';
import { Provider } from 'react-redux';
import transit from 'transit-immutable-js';
import configure from 'store/configure';
let preloadedState = window.__PRELOADED_STATE__ && transit.fromJSON(window.__PRELOADED_STATE__);

const store = configure(preloadedState);

const App = () => {
      return (
            <Provider store={store}>
                  <BrowserRouter>
                        <Route component={Root}/>
                  </BrowserRouter>
            </Provider>
      );
};

export default App;