import express from 'express';
import bodyParser from 'body-parser';
// @ts-ignore
import cookieParser from 'cookie-parser';
// @ts-ignore
import cors from 'cors';

import Database from "./config/database";
import {Methods} from "./models/methods";
import {ErrorHandler, handleError} from "./services/ErrorHandling";

export default class App {
    public app: express.Application;

    constructor(public controllers: Array<any>, public port: number) {
        this.app = express();
        this.port = port;

        this.setCors();
        this.initializeMiddleware();
        this.initializeControllers();
    }

    private initializeMiddleware(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(cookieParser());
    }

    private initializeControllers(): void {
        this.controllers.forEach((controller) => {
            this.app.use(controller);
        });
        this.app.use((err: express.Errback, req: express.Request, res: express.Response, next: express.NextFunction) => {
            handleError(err, res);
        });
    }

    private setCors(): void {
        const allowedOrigin: Array<string> = ['http://localhost:4200'];
        const methods: Array<Methods> = ['GET', 'POST', 'PUT', 'DELETE'];

        this.app.disable('x-powered-by');
        this.app.use(cors({
            origin: allowedOrigin,
            methods: methods
        }));
    }

    public async listen(): Promise<void> {
        try {
            await Database.init();
            this.app.listen(this.port, () => {
                // tslint:disable-next-line:no-console
                console.log('DATABASE CONNECTED');
                console.log(`listening on http://localhost:${this.port}/`);
            });
        } catch (error) {
            console.log(error);
        }
    }
}
