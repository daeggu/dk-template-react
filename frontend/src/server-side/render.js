import React from 'react';
import { StaticRouter } from 'react-router';
import Root from 'containers/Root';
import configure from 'store/configure';
import { Provider } from 'react-redux';
import { renderToString } from 'react-router-server';

const render = async (location) => {
    const store = configure();
    const { html } = await renderToString(
        <Provider store={store}>
            <StaticRouter location={location}>
                <Root />
            </StaticRouter>
        </Provider>
    );
    return {
        html,
        state: store.getState()
    };
}

export default render;