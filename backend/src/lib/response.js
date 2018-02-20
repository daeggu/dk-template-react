const message = function (ctx, message) {
      const resVO = new Object();
      resVO.status = ctx.status;
      resVO.message = message;
      return resVO;
}

const codes = {
      SUCESS                  : 200,
      NO_CONTENT              : 204,
      BAD_REQUEST             : 400,
      UNAUTHORIZED            : 401,
      FORBIDDEN               : 403,
      NOT_FOUND               : 404,
      CONFLICT                : 409,
      INTERNAL_SERVER_ERROR   : 500
}

module.exports = {
      message,
      codes
}