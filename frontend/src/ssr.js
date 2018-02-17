import React from 'react';
import { StaticRouter, matchPath } from 'react-router';
import Root from 'containers/Root';
import configure from 'store/configure';
import { Provider } from 'react-redux';
import ReactDOMServer from 'react-dom/server';
import routes from './routes';
import transit from 'transit-immutable-js';
import { Helmet } from 'react-helmet';

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
    
    //한번 렌더링 작업 완료된다음에 실행되어야함.. 
    //이작업이 생략되면 메모리 누수현상발생
    const helmet = Helmet.renderStatic();

    //Record의 경우 별도의 방법이 필요함.. 이렇게 전달할경우 정상동작을 위해선 Map으로
    const preloadedState = JSON.stringify(transit.toJSON(store.getState()))
                .replace(/</g, '\\u003c');

    return {
        html,
        preloadedState,
        helmet
    };
}

export default render;