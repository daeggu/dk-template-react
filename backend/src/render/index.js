const fs = require('fs');
const path = require('path');
const render = require('./build/render').default;
var serialize = require('serialize-javascript')

const template = fs.readFileSync(path.join(__dirname,
                '../../build/index.html'), { encoding: 'utf8'});

module.exports = async (ctx) => {
    const location = ctx.path;
    const { html, state } = await render(location);
    const page = template.replace('<div id="root"></div>', 
    `<div id="root">${html}</div>
    <script>window.__PRELOADED_STATE__=${serialize(state)}</script>`);
    ctx.body = page; 
 }