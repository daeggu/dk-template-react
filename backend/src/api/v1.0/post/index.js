const Router = require('koa-router');
const postCtrl = require('./post.ctrl');
const post = new Router();

post.get('/', postCtrl.list);
post.get('/:id', postCtrl.checkObjectId, postCtrl.read);

post.post('/', postCtrl.checkLogin, postCtrl.write);
post.patch('/:id', postCtrl.checkObjectId, postCtrl.checkLogin, postCtrl.update);
post.delete('/:id', postCtrl.checkObjectId, postCtrl.checkLogin, postCtrl.remove);

module.exports = post;