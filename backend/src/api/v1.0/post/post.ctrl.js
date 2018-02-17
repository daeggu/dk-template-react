const Joi = require('joi');
const log = require('lib/log');
const Post = require('db/models/Post');
const res = require('lib/response');
const {
      ObjectId
} = require('mongoose').Types;

exports.write = async(ctx) => {
      const { body } = ctx.request;
      log.info('<< [POST]  /posts', body);

      //validation
      const schema = Joi.object().keys({
            title: Joi.string().required().min(3),
            body: Joi.string().required().min(3),
            tags: Joi.array().items(Joi.string())
      });
      const result = Joi.validate(body, schema);

      if(result.error){
            ctx.status = res.codes.BAD_REQUEST;
            ctx.body = res.message(ctx, result.error.message);
            return;
      }
      
      let createdPost = null;
      try{
            createdPost = await Post.createPost(ctx.request.body);
      }catch(e){
            ctx.throw(res.codes.INTERNAL_SERVER_ERROR, e);
      }
      ctx.body = createdPost;
};

exports.read = async (ctx) => {
     const { id } = ctx.params;
     log.info('<< [GET] /posts/'+ id);
     let post = null;
     try{
        post = await Post.findById(id);
     }catch(e){
        ctx.throw(res.codes.INTERNAL_SERVER_ERROR, e.message);
     }
     ctx.body = post;
}

exports.list = async (ctx)=> {
      const page = parseInt(ctx.query.page || 1, 10);
      const { tag } = ctx.query;
      log.info('<< [GET] /posts?page='+page+'&tag='+tag);
      if(page < 1){
            ctx.status = res.codes.BAD_REQUEST;
            ctx.body = res.message(ctx, 'page < 1');
            return ;
      }
      let posts = null;
      let lastPage = null;

      try{
          posts = await Post.findPosts(ctx.request.query);
          lastPage = await Post.getLastPage(tag);
      }catch(e){
            ctx.throw(res.codes.INTERNAL_SERVER_ERROR, e.message);
      }
      ctx.set('last-page', lastPage);
      ctx.body = posts;
}

exports.update = async(ctx) => {
      const { id } = ctx.params;
      const { body } = ctx.request;
      log.info('<< [PATCH]  /posts', body);
      let post = null;
      try{
            post =  await Post.editPost({id, ...body});
      }catch(e){
            ctx.throw(res.codes.INTERNAL_SERVER_ERROR, e.message);
      }
      ctx.body = post;
}

exports.remove = async(ctx) => {
      const { id } = ctx.params;
      log.info('<< [DELETE] /posts/'+ id);
      let post = null;
      try{
            post = await Post.deletePost(id);
      }catch(e){
            ctx.throw(res.codes.INTERNAL_SERVER_ERROR, e.message);
      }
      ctx.body = post;
}

//middleware
exports.checkLogin = (ctx, next) => {
      if(!ctx.session.logged) {
            ctx.status = res.codes.UNAUTHORIZED;
            ctx.body = res.message(ctx, 'Unauthroized');
            return;
      }
      return next();
}

exports.checkObjectId = (ctx, next) => {
      const { id } = ctx.params;
      if(!ObjectId.isValid(id)){
            ctx.status = res.codes.BAD_REQUEST;
            ctx.body = res.message(ctx, '[_id] is invalid.');
            return ;
      }
      return next();
}