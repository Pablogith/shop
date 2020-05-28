// @ts-ignore
import express from 'express';
import ProductService from "../services/ProductService";

const router: any = express.Router();

router.get('/products', async (req: express.Request, res: express.Response) => {
    const response: Array<Object> = await ProductService.getAllProducts();

    return res.status(200).json(response);
});

router.get('/products/:id', async (req: express.Request, res: express.Response) => {
    const {id} = req.params;

    const response: Object = await ProductService.getProduct(id);

    return res.status(200).json(response);
});

router.post('/products', async (req: express.Request, res: express.Response) => {
    const {name, price, category, description, image, currency} = req.body;

    const response: Object = await ProductService.addProduct({name, price, category, description, image, currency});

    return res.status(200).json(response);
});

router.delete('/products/:id', async (req: express.Request, res: express.Response) => {
    const {id} = req.params;

    const response: Object = await ProductService.deleteProduct(id);

    return res.status(200).json(response);
});

export {router};
