const routerResponse = (option = {}) => {
  return async (ctx, next) => {
    ctx.success = (data, msg) => {
      ctx.type = option.type || "json";
      ctx.body = {
        code: option.successCode || 0,
        msg: msg || "",
        data: data,
      };
    };

    ctx.fail = (code, msg) => {
      ctx.type = option.type || "json";
      ctx.body = {
        code: code || option.failCode || 99,
        msg: msg || option.failMsg || "fail",
      };
      console.log(ctx.body);
    };
    await next();
  };
};

export { routerResponse };