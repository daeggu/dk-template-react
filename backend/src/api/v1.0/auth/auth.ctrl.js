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
