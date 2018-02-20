
# DK Template - Free Blog Template(React) 

**DK(β)** shows perfect **DK(β) Style** on any size screen through **reactive web** design.

![markdown](https://user-images.githubusercontent.com/14367158/36366253-97f385dc-1590-11e8-8457-6f643254f820.png)

## Demo
If you want to try all of the features, download the source and run it as koa server.(Backend)

 - http://dk-blog-template.surge.sh/ (Client rendering only)
 - Responsive web tester : http://troy.labs.daum.net/
 
## Dependency
 
**Frontend**
 - immutable
 - transit-js transit-immutable-js
 - ignore-loader --dev
 - react-router-dom, 
 - react-router-server, 
 - redux-devtools-extension
 - redux, react-redux, redux-actions, redux-pender
 - codemirror, marked prismjs
 - axios
 - query-string
 - moment
 - transit-immutable-js, transit-js
 - react-helmet
 - remove-markdown

**Design**
 - sass-loader, node-sass
 - classnames
 - open-color
 - include-media
 - react-icons

**Backend**
 - koa, koa-static
 - koa-router
 - koa-bodyparser
 - koa-session
 - Joi, moment
 - dotenv
 - nodemon
 - mongoose
 - jsonwebtoken
 
 ## Check (code split & server side rendering)

 1. Install dependencies (Both frontend, backend)
```sh
frontend> yarn
backend> yarn
```
 2. build files
 ```sh
frontend> yarn build
frontend> yarn build:server - copy to backend/src/ssr/render.js
```
 3. start server
 ```sh
backend> yarn start 
```
4. check it out
```sh
http://localhost:4000/
```