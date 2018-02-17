const Router = require('koa-router');
const post = require('./post');
const auth = require('./auth');

const api = new Router();
api.use('/posts', post.routes());
api.use('/auth', auth.routes());

module.exports = api;