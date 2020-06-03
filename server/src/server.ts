import App from "./app";
import {router as ProductRouter} from './api/routes/productRoutes';
import {router as OrderRouter} from './api/routes/orderRoutes';

const app = new App([
    ProductRouter,
    OrderRouter
], 3000);

app.listen();