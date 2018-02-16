const render = require('./render').default;
var serialize = require('serialize-javascript')

const manifest = require('../../../frontend/build/asset-manifest.json');

function buildHtml({html, state}){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        <link rel="manifest" href="/manifest.json">
        <link rel="shortcut icon" href="/dk.ico">
        <title>Daeggu</title>
        <link href="/${manifest['app.css']}" rel="stylesheet">
    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">${html}</div>
        <script>
            window.__PRELOADED_STATE__=${serialize(state)}
        </script>
        <script type="text/javascript" src="/${manifest['vendor.js']}"></script>
        <script type="text/javascript" src="/${manifest['app.js']}"></script>
    </body>
    </html>
    `;
}

module.exports = async (ctx) => {
    const rendered = await render(ctx.path);
    ctx.body = buildHtml(rendered);  
 }