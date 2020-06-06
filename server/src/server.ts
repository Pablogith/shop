import App from "./app";
import {router as ProductRouter} from './api/routes/productRoutes';
import {router as OrderRouter} from './api/routes/orderRoutes';
import {router as OrderProductRouter} from './api/routes/orderProductRoutes';

const app = new App([
    ProductRouter,
    OrderRouter,
    OrderProductRouter
], 3000);

app.listen();