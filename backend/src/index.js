require('dotenv').config();
const {
      PORT : port = 4000, //default
      COOKIE_SIGN_KEY : signKey
} = process.env;
const { jwtMiddleware } = require('lib/token');
const Koa = require('koa');

const koaStatic = require('koa-static');
const path = require('path');
const fs = require('fs');
const frontendBuild = path.join(__dirname, '../../frontend/build');
const indexPagePath = path.join(frontendBuild, 'index.html');
const indexPage = fs.readFileSync(indexPagePath);

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
//TODO 추후 적용===============
app.use(jwtMiddleware);
//============================
app.use(session(sessionConfig, app));
app.keys = [signKey];
router.use('/api', api.routes());
router.get('/', ssr);
app.use(router.routes());
app.use(router.allowedMethods());

app.use(koaStatic(frontendBuild));
app.use(ssr); 
app.use((ctx) => {
  ctx.body = indexPage;
});

app.listen(port, () => {
      console.log(`Server is listening to port ${port}`)
});