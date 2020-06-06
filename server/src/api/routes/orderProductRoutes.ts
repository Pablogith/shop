import express from 'express';
import OrderProductController from "../controllers/OrderProductController";

const router: any = express.Router();

router.get('/basketProduct/:id', OrderProductController.getProductOrder);

export {router};
