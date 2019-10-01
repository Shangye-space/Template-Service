const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router.get('/status', (ctx, next) => {
    ctx.body = {
        mode: 'development',
        service: 'Item Service',
        version: 'v0.1',
    };
});

app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
