require('dotenv').config();

const {
      PORT : port
} = process.env;

const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');
const app = new Koa();
const ssr = require('./ssr');

app.use((ctx, next) => {
      if(ctx.path === '/') return ssr(ctx);
      return next();
});

app.use(serve(path.resolve(__dirname, '../../frontend/build/')));
app.use(ssr);
app.listen(port, ()=>{
      console.log(`server is listening to port ${port}`)
});