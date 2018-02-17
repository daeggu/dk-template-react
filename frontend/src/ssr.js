import React from 'react';
import { StaticRouter, matchPath } from 'react-router';
import Root from 'containers/Root';
import configure from 'store/configure';
import { Provider } from 'react-redux';
import ReactDOMServer from 'react-dom/server';
import routes from './routes';
import transit from 'transit-immutable-js';

const render = async (ctx) => {
    //url : /posts?page=1  , path : /posts
    const { url } = ctx;
    const store = configure();
    const promises = [];
    routes.forEach(
        route => {
            const match = matchPath(url, route);
            if(!match) return ;
            const { preload } = route.component;
            if(!preload) return ;
            const promise = preload(store.dispatch);
            promises.push(promise);
        }
    );
    try{
        await Promise.all(promises);
    }catch(e){
    }
    const html = await ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={url}>
                <Root />
            </StaticRouter>
        </Provider>
    );
    const preloadedState = JSON.stringify(transit.toJSON(store.getState()))
                .replace(/</g, '\\u003c');

    return {
        html,
        preloadedState
    };
}

export default render;