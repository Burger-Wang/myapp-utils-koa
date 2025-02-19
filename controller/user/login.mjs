const login = async (ctx, next) => {
  const name = ctx.request.body.name || "";
  ctx.body = {
    data: ctx.request.body,
  };
};

export default {
  "POST&/login": login,
};

// https://api.lolimi.cn/API/huangj/api.php  金价查询
