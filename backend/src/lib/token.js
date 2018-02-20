const jwt = require('jsonwebtoken');
const { JWT_SECRET : secret } = process.env;

 function generateToken(payload, subject) {
      return new Promise(
            (resolve, reject) => {
                  jwt.sign(payload, secret,{
                        issuer: 'daeggu.com',
                        expiresIn: '7d',
                        subject
                  },(error, token)=>{
                         if(error) reject(error);
                         resolve(token);
                  });
            }
      );
 };

 function decodedToken(token){
       return new Promise(
            (resolve, reject) => {
                  jwt.verify(token,secret, (error, decoded) => {
                        if(error) reject(error);
                        resolve(decoded);
                  });
            }
       );
 }

 exports.generateToken = generateToken;
 exports.jwtMiddleware = async (ctx, next) => {
      const token = ctx.cookies.get('access_token');
      if(!token) return next();
      try {
            const decoded = await decodedToken(token);
            //iat : issued at 토큰이 발급된 시간 토근 age를 판단할 수 있따.
            if(Date.now() / 1000 - decoded.iat > 60 * 60 * 24){
                  // 하루가 지나면 갱신해준다.
                  const { _id, profile } = decoded;
                  const freshToken = await generateToken({_id, profile}, 'accout');
                  ctx.cookies.set('access_token', freshToken, {
                        maxAge: 1000 * 60 * 60 * 24 * 7,
                        httpOnly: true
                  });
            }
            ctx.request.user = decoded;
      }catch(e){
             // token validate 실패
            ctx.request.user = null;
      }
      return next();
 }