import express from 'express';
import OrderService from "../../services/OrderService";

export default class OrderController {
    static async createOrder(req: express.Request, res: express.Response) {
        try {
            const order = {
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                street: req.body.street,
                homeNumber: req.body.homeNumber,
                place: req.body.place,
                paymentMethod: req.body.paymentMethod,
                products: undefined
            };

            const orderProduct = {
                products: req.body.product,
                amount: req.body.amount
            };

            const orderDataArray = new Array(order);
            const orderDataIsGood: boolean = orderDataArray.every(value => !!value);

            const productDataArray = new Array(orderProduct);
            const productDataIsGood: boolean = productDataArray.every(value => !!value);

            if (orderDataIsGood && productDataIsGood) {
                const response = await OrderService.addOrder(order, orderProduct);

                if (!response) {
                    return res.status(404).send({
                        success: false,
                        status: 404,
                        message: 'IOrder not found'
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

    static async getAllOrders(req: express.Request, res: express.Response) {
        try {
            const response = await OrderService.getAllOrders();
            if (!response) {
                return res.status(404).send({
                    success: false,
                    status: 404,
                    message: "Not Found"
                });
            }

            if (response.length <= 0) {
                return res.status(404).send({
                    success: false,
                    errors: {
                        message: "Not found any orders"
                    }
                })
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

    static async getOrder(req: express.Request, res: express.Response) {
        try {
            const {id} = req.params;
            const response = await OrderService.getOrder(id);

            if (!response) {
                return res.status(400).send({
                    success: false,
                    status: 400,
                    message: 'Invalid request'
                });
            }

            const prodId = response.products;
            const prodResponse = await OrderService.getProductOrder(prodId);

            if (!prodResponse) {
                return res.status(400).send({
                    success: false,
                    status: 400,
                    message: 'Invalid request'
                });
            }

            response.products = prodResponse;

            return res.status(200).send({
                success: true,
                data: response
            });
        } catch (error) {
            return res.status(500).send({
                success: false,
                message: error
            })
        }
    }
}
