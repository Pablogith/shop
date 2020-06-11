import express from 'express';

const router: any = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send({
       message: 'OK'
    });
});

export {router};