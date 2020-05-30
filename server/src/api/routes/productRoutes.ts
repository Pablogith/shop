import express from 'express';
import {productController} from "../controllers/productController";
import {productValidations} from "../../helpers/productValidations";

const router: any = express.Router();

router.get('/products', productController.getAllProducts);

router.get('/products/:id', productController.getProduct);

router.post('/products',
    productValidations.addValidators,
    productValidations.checkAddValidation,
    productController.createProduct);

router.delete('/products/:id', productController.deleteProduct);

export {router};