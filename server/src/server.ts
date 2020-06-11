import App from "./app";
import {router as ProductRouter} from './api/routes/productRoutes';
import {router as OrderRouter} from './api/routes/orderRoutes';
import {router as OrderProductRouter} from './api/routes/orderProductRoutes';
import {router as CommentsRouter} from "./api/routes/commentsRoutes";
import {router as BaseRouter} from './api/routes/base';

const app = new App([
    ProductRouter,
    OrderRouter,
    OrderProductRouter,
    CommentsRouter,
    BaseRouter
], 3000);

app.listen();