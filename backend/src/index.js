require('dotenv').config();
const {
      PORT : port = 4000, //default
      COOKIE_SIGN_KEY : signKey
} = process.env;

const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');
const staticPath = path.join(__dirname, '../../frontend/build');

const app = new Koa();
const db = require('db');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const sessionConfig = {
      maxAge: 86400000, //하루
      //signed: true deafult true
};
const Router = require('koa-router');
const router = new Router();
const api = require('./api');
const ssr = require('./ssr');

db.connect();
app.use(bodyParser());
app.use(session(sessionConfig, app));
app.keys = [signKey];
router.use('/api', api.routes());
router.get('/', ssr);
app.use(router.routes());
app.use(router.allowedMethods());

app.use(serve(staticPath)); 
app.use(ssr); 

app.listen(port, () => {
      console.log(`Server is listening to port ${port}`)
})
