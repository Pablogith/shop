import express from 'express';
import IProduct from "../../models/IProduct";
import ProductService from "../../services/ProductService";

export default class ProductController {
    static async getAllProductsFromCategory(req: express.Request, res: express.Response): Promise<express.Response> {
        try {
            const {category} = req.params;
            const response: IProduct[] = await ProductService.getAllProductsFromCategory(category);

            if (!response) {
                return res.status(404).send({
                    success: false,
                    status: 404,
                    message: "Not Found"
                });
            }

            return res.status(200).send({
                success: true,
                data: response
            });
        } catch (error) {
            return res.status(500).send({
                success: false,
                message: error
            });
        }
    }

    static async getAllProducts(req: express.Request, res: express.Response): Promise<express.Response> {
        try {
            const response: IProduct[] = await ProductService.getAllProducts();

            if (!response) {
                return res.status(404).send({
                    success: false,
                    status: 404,
                    message: "Not Found"
                });
            }

            return res.status(200).send({
                success: true,
                data: response
            });
        } catch (error) {
            return res.status(500).send({
                success: false,
                message: error
            });
        }
    }

    static async getProduct(req: express.Request, res: express.Response): Promise<express.Response> {
        try {
            const {id} = req.params;
            const response: IProduct = await ProductService.getProduct(id);

            if (!response) {
                return res.status(404).send({
                    success: false,
                    status: 404,
                    message: "Not Found"
                });
            }

            return res.status(200).send({
                success: true,
                data: response
            });
        } catch (error) {
            return res.status(500).send({
                success: false,
                message: error
            });
        }
    }

    static async createProduct(req: express.Request, res: express.Response): Promise<express.Response> {
        try {
            const {name, price, category, description, image, currency, comments} = req.body;

            const isGood: boolean = [name, price, category, description, image].every(value => !!value);

            if (isGood) {
                const response: IProduct = await ProductService.addProduct({
                    name,
                    price,
                    category,
                    description,
                    image,
                    currency,
                    comments
                });

                if (!response) {
                    return res.status(404).send({
                        success: false,
                        status: 404,
                        message: 'Product not found'
                    })
                }

                return res.status(200).send({
                    success: true,
                    data: response
                });
            }

            return res.status(400).send({
                success: false,
                status: 400,
                message: 'Invalid request'
            });
        } catch (error) {
            return res.status(500).send({
                success: false,
                message: error
            });

        }
    }

    static async deleteProduct(req: express.Request, res: express.Response): Promise<express.Response> {
        try {
            const {id} = req.params;

            const response: IProduct = await ProductService.deleteProduct(id);

            if (!response) {
                return res.status(404).send({
                    success: false,
                    status: 404,
                    message: "Not Found"
                });
            }

            return res.status(200).send({
                success: true,
                data: response
            });
        } catch (error) {
            return res.status(500).send({
                success: false,
                message: error
            });
        }
    }

    static async editProduct(req: express.Request, res: express.Response): Promise<express.Response> {
        try {
            const {id} = req.params;
            const {name, price, category, description, image, currency} = req.body;

            const isGood: boolean = [name, price, category, description, image].every(value => !!value);

            if (isGood) {
                const response: IProduct = await ProductService.editProduct(id, {
                    name,
                    price,
                    category,
                    description,
                    image,
                    currency
                });

                if (!response) {
                    return res.status(404).send({
                        success: false,
                        status: 404,
                        message: 'Product not found'
                    })
                }

                return res.status(200).send({
                    success: true,
                    data: response
                });
            }

            return res.status(400).send({
                success: false,
                status: 400,
                message: 'Invalid request'
            });
        } catch (error) {
            return res.status(500).send({
                success: false,
                message: error
            });
        }
    }
}

