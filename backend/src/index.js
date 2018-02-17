require('dotenv').config();

const {
      PORT : port
} = process.env;

const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');
const app = new Koa();
const ssr = require('./ssr');
const staticPath = path.join(__dirname, '../../frontend/build');
const Router = require('koa-router');
const router = new Router();

router.get('/', ssr);
app.use(router.routes());
app.use(serve(staticPath));
app.use(ssr);
app.listen(port, ()=>{
      console.log(`server is listening to port ${port}`)
});