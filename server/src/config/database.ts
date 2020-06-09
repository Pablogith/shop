// @ts-ignore
import mongoose from 'mongoose';
// @ts-ignore
import session from 'express-session';
import {MONGO_URI} from "./MONGO_URI";

const MongoDBStore: any = require('connect-mongodb-session')(session);

export default class Database {
    private static MONGO_URI: string = MONGO_URI;

    private static setStore(): void {
        const store: any = new MongoDBStore({
            uri: this.MONGO_URI,
            collection: 'session'
        });

        store.on('error', (error: any) => {
            console.log({error});
        });
    }

    private static async connect(): Promise<void> {
        try {
            await mongoose.connect(this.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        } catch (error) {
            console.log(error);
        }
    }

    public static async init(): Promise<void> {
        this.setStore();
        await this.connect();
    }
}