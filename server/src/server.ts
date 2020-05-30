import App from "./app";
import {router as ProductRouter} from './api/routes/productRoutes';

const app = new App([ProductRouter], 3000);

app.listen();