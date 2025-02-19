import Koa from "koa";
import Router from "@koa/router";
import { bodyParser } from "@koa/bodyparser";
import addModules from "./controller/index.mjs";

const app = new Koa();
app.use(bodyParser());
const router = new Router();
await addModules(router, "controller");

app.use(async (ctx, next) => {
  await next();
});

app.use(router.routes());
app.listen(3800);
console.log("start Koa port:3800");
