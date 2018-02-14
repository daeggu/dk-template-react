require('dotenv').config();

const {
      PORT : port
} = process.env;

const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');
const app = new Koa();
const render = require('./render/index');

app.use((ctx, next) => {
      if(ctx.path === '/') return render(ctx);
      return next();
});

app.use(serve(path.resolve(__dirname, '../build/')));
app.use(render);
app.listen(port, ()=>{
      console.log(`server is listening to port ${port}`)
});