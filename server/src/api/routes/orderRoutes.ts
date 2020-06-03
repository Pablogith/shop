import express from 'express';
import OrderController from "../controllers/OrderController";

const router: any = express.Router();

router.post('/orders', OrderController.createOrder);

router.get('/orders', OrderController.getAllOrders);

router.get('/orders/:id', OrderController.getOrder);

export {router};
