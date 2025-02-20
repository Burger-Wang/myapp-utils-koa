import Koa from "koa";
import Router from "@koa/router";
import { bodyParser } from "@koa/bodyparser";
import addModules from "./controller/index.js";
import { routerResponse } from "./utils/routerResponse.js";

const app = new Koa();
app.use(bodyParser());
app.use(routerResponse())
const router = new Router();
await addModules(router, "controller");

app.use(async (ctx, next) => {
  ctx.body = 'Hello World';
  await next();
});

console.log('我真的有更新啊')

app.use(router.routes());
app.listen(3000);
console.log("start Koa port:3000");
