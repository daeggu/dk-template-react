const message = function (ctx, message) {
      const resVO = new Object();
      resVO.status = ctx.status;
      resVO.message = message;
      return resVO;
}

const codes = {
      SUCESS                  : 200,
      BAD_REQUEST             : 400,
      UNAUTHORIZED            : 401,
      NOT_FOUND               : 404,
      INTERNAL_SERVER_ERROR   : 500
}

module.exports = {
      message,
      codes
}