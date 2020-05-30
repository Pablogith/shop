"use strict";
// // @ts-ignore
// import express from 'express';
// import {check, validationResult} from "express-validator";
// import ProductService from "../services/ProductService";
// import IProduct from "../models/IProduct";
//
//
// const router: any = express.Router();
//
// router.get('/products', async (req: express.Request, res: express.Response) => {
//     try {
//         const response: Array<IProduct> = await ProductService.getAllProducts();
//
//         if (!response) {
//             return res.status(404).send({
//                 message: "Not Found"
//             });
//         }
//
//         return res.status(200).send(response);
//     } catch (error) {
//         return res.status(500).send({error})
//     }
// });
//
// router.get('/products/:id', async (req: express.Request, res: express.Response) => {
//     try {
//         const {id} = req.params;
//         const response: IProduct = await ProductService.getProduct(id);
//
//         if (!response) {
//             return res.status(404).send({
//                 message: "Not Found"
//             });
//         }
//
//         return res.status(200).send(response);
//     } catch (error) {
//         return res.status(500).send({error});
//     }
// });
//
// router.post('/products', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
//     try {
//         const {name, price, category, description, image, currency} = req.body;
//
//         const isGood: boolean = [name, price, category, description, image].every(value => !!value);
//
//         if (isGood) {
//             const response: IProduct = await ProductService.addProduct({
//                 name,
//                 price,
//                 category,
//                 description,
//                 image,
//                 currency
//             });
//
//             if(!response) {
//                 return res.status(404).send({
//                     message: 'Product not found'
//                 })
//             }
//
//             return res.status(200).send(response);
//         }
//
//         return res.status(400).send({
//             message: 'Invalid request'
//         });
//     } catch (error) {
//         return res.status(500).send({error});
//
//     }
// });
//
// router.delete('/products/:id', async (req: express.Request, res: express.Response) => {
//     try {
//         const {id} = req.params;
//
//         const response: IProduct = await ProductService.deleteProduct(id);
//
//         if (!response) {
//             return res.status(404).send({
//                 message: "Not Found"
//             });
//         }
//
//         return res.status(200).send(response);
//     } catch (error) {
//         return res.status(500).send({error});
//     }
// });
//
// export {router};
