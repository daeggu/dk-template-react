import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Root from 'containers/Root';
import { Provider } from 'react-redux';
import transit from 'transit-immutable-js';

import configure from 'store/configure';
let preloadedState = window.__PRELOADED_STATE__ && transit.fromJSON(window.__PRELOADED_STATE__);

if(preloadedState){
      console.log("존재");
      preloadedState = transit.fromJSON(preloadedState)
}
const store = configure(preloadedState);

const App = () => {
      return (
            <Provider store={store}>
                  <BrowserRouter>
                        <Route path="/" component={Root}/>
                  </BrowserRouter>
            </Provider>
      );
};

export default App;