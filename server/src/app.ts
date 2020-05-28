// @ts-ignore
import express from 'express';
// @ts-ignore
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import Database from "./config/database";
import {router} from "./api/ProductController";

const app: express.Application = express();
const port: number = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

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
