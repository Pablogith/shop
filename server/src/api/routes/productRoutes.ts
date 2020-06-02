import express from 'express';
// @ts-ignore
import ProductController from "../controllers/ProductController";
import {productValidations} from "../../helpers/productValidations";

const router: any = express.Router();

router.get('/products/:category', ProductController.getAllProductsFromCategory);

router.get('/products/:category/:id', ProductController.getProduct);

router.get('/products', ProductController.getAllProducts);

router.post('/products',
    productValidations.addValidators,
    productValidations.checkAddValidation,
    ProductController.createProduct);

router.delete('/products/:id', ProductController.deleteProduct);

export {router};