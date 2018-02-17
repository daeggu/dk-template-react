import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';
import { matchPath } from 'react-router';
import 'styles/main.scss'

const render = async () => {
      if(process.env.NODE_ENV === 'development') {
            return ReactDOM.render(<App />, document.getElementById('root'));
      }

      const getComponents = [];
      const { pathname } = window.location;

      routes.forEach(
            route => {
            const match = matchPath(pathname, route);
            if(!match) return;
            const { getComponent } = route.component;
            if(!getComponent) return;
            getComponents.push(getComponent());
            }
      );
      await Promise.all(getComponents);
      ReactDOM.hydrate(<App />, document.getElementById('root'));
}

render(); 
registerServiceWorker();
