const Joi = require('joi');
const Account = require('db/models/Account');
const log = require('lib/log');
const res = require('lib/response');

const { 
      ADMIN_PW : adminPW
} = process.env;

exports.login = (ctx) => {
      const { password }  = ctx.request.body;
      if(adminPW === password) {
            ctx.body = {
                  success: true
            };
            //로그인에 성공하면 logged값을  true로 설정
            ctx.session.logged = true;
      }else{
            ctx.body = {
                  success: false
            };
            ctx.status = 401; // Unauthorized
      }
};

exports.check = (ctx) => {
      ctx.body = {
            // ! 문자를 두번 입력함으로서,
            // 값이 존재하지 않을때도 false 를 반환하도록 설정합니다
            logged: !!ctx.session.logged
      }
};

exports.logout = (ctx) => {
      ctx.session = null;
      ctx.status = 204; // No Content
};

//===========================================================
//no Session
exports.localRegister = async (ctx) => {
      const schema = Joi.object().keys({
            username: Joi.string().alphanum().min(4).max(15).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required()
      });
   
      const result = Joi.validate(ctx.request.body, schema);

      if(result.error){
            ctx.status = res.codes.BAD_REQUEST;
            ctx.body = res.message(ctx, result.error.message);
            return;
      }
      let existing = null;
      try {
            existing = await Account.findByEmailOrUsername(ctx.request.body);
      }catch(e){
            ctx.throw(res.codes.INTERNAL_SERVER_ERROR, e);
      }

      if(existing){
            ctx.status = res.codes.CONFLICT;
            ctx.body = {
                  key: existing.email === ctx.request.body.email ? 'email': 'username'
            };
            return ;
      }

      let account = null;
      try{
            account = await Account.localRegister(ctx.request.body);
      }catch(e){
            ctx.throw(res.codes.INTERNAL_SERVER_ERROR, e);
      }

      let token = null;
      try {
            token = await account.generateToken();
      }catch(e){
            ctx.throw(res.codes.INTERNAL_SERVER_ERROR, e);
      }

      ctx.cookies.set('acces_token', token,
            {httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7});

            ctx.body = account.profile;
};

exports.localLogin = async (ctx) => {
      const schema = Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().required()
      });
      const result = Joi.validate(ctx.request.body, schema);

      if(result.error){
            ctx.status = res.codes.BAD_REQUEST;
            ctx.body = res.message(ctx, result.error.message);
            return;
      }

      const { email, password } = ctx.request.body;
      let account = null;
      try{
            account = await Account.findByEmail(email);
      }catch(e){
            ctx.throw(res.codes.INTERNAL_SERVER_ERROR, e);
      }

      if(!account || !account.validatePassword(password)){
            ctx.status = res.codes.FORBIDDEN;
            ctx.body = res.message(ctx, 'Forbidden');
            return;
      }

      let token = null;
      try {
            token = await account.generateToken();
      }catch(e){
            ctx.throw(res.codes.INTERNAL_SERVER_ERROR, e);
      }
      ctx.cookies.set('access_token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 });
      ctx.body = account.profile;
};

exports.exists = async (ctx) => {
      const { key, value } = ctx.params;
      let account = null;

      try {
            //await뒤에 ()로 감싸지 않으면 코드가 이상하게 작동함.
            account = await (key === 'email' ? Account.findByEmail(value) :
            Account.findByUsername(value));
      }catch(e){
            ctx.throw(res.codes.INTERNAL_SERVER_ERROR, e);
      }
      ctx.body = {
            exists: account !== null
      };
};

//TODO EDIT
exports.logout2 = async (ctx) => {
      ctx.cookies.set('access_token', null, {
            maxAge: 0,
            httpOnly: true
      });
      ctx.body = res.codes.NO_CONTENT;
};

exports.check2 = (ctx) => {
      //쿠키에 access_token이 있다면 유저정보 알려주는 api
      const { user } = ctx.request;
      if(!user){
            ctx.status = res.codes.FORBIDDEN;
            return;
      }
      ctx.body = user.profile;
}