// @ts-ignore
import express from 'express';
// @ts-ignore
import bodyParser from 'body-parser';
// @ts-ignore
import cookieParser from 'cookie-parser';
// @ts-ignore
import cors from 'cors';

import Database from "./config/database";
import {router} from "./api/ProductController";

const app: express.Application = express();
const port: number = 3000;

const allowedOrigin: Array<string> = ['http://localhost:4200'];
const methods: Array<string> = ['GET', 'POST', 'PUT', 'DELETE'];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.disable('x-powered-by');
app.use(cors({
    origin: allowedOrigin,
    methods: methods
}));

app.use(router);

(async function () {
    try {
        await Database.init();
        app.listen(port, () => {
            // tslint:disable-next-line:no-console
            console.log('DATABASE CONNECTED');
            console.log(`listening on http://localhost:${port}/`);
        });
    } catch (error) {
        console.log(error);
    }
})();
