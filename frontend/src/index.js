import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configure from 'store/configure';
import 'styles/main.scss'
import registerServiceWorker from './registerServiceWorker';

const store = configure();

ReactDOM.render(
       <App store={store}/>,
       document.getElementById('root'));
registerServiceWorker();