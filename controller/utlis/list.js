import koaRequest from 'koa2-request'
//   金价查询

const getGoldList = async (ctx, next) => {
  let res = await koaRequest({
    url: 'https://api.lolimi.cn/API/huangj/api.php',
    method: 'get',
  })
  ctx.success(JSON.parse(res.body), 'success')
};

export default {
  "GET&/gold/list": getGoldList,
};
