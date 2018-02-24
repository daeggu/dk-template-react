const Router = require('koa-router');
const auth = new Router();
const authCtrl = require('./auth.ctrl');

auth.post('/login', authCtrl.login);
auth.get('/check', authCtrl.check);
auth.post('/logout', authCtrl.logout);

//==================================
// auth.post('/register/local', authCtrl.localRegister);
// auth.post('/login/local', authCtrl.localLogin);
// auth.get('/exists/:key(email|username)/:value', authCtrl.exists);
// //TODO edit
// auth.post('/logout2', authCtrl.logout2);
// auth.get('/check2', authCtrl.check);

module.exports = auth;