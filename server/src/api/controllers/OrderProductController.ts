import express from 'express';
import OrderProductService from "../../services/OrderProductService";

export default class OrderProductController {
    static async getProductOrder(req: express.Request, res: express.Response) {
        try {
            const {id} = req.params;
            const response = await OrderProductService.getProductFromOrder(id);

            if (!response) {
                return res.status(400).send({
                    success: false,
                    status: 400,
                    message: 'Invalid request'
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
}