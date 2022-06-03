const Koa = require("koa");
const app = new Koa();

const PORT = process.env.PORT || 3000;

app.use(async ctx => {
    const message = 'Hello from server!'; 
    ctx.body = message;
  });

app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`)
});
