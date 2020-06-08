import {OrderModel, ProductsModel} from "../models/Order";
import mongoose from 'mongoose';

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');


export default class OrderService {
    static async addOrder(order: any): Promise<any> {
        try {
            let length = order.products.length;

            for (let i = 0; i < length; i++) {
                order.products[i].productId = mongoose.Types.ObjectId(order.products[i].productId);
                const _productOrder = new ProductsModel(order.products[i]);
                order.products[i] = await _productOrder.save();
            }

            const _order = new OrderModel(order);
            const msg = {
                to: order.email,
                from: 'practiceshop@gmail.com',
                subject: 'Order',
                text: '',
                html: `<h1>Thanks ${order.name} for shopping in our store :)</h1>`
            };
            await sgMail.send(msg);
            return await _order.save();
        } catch (error) {
            return error;
        }
    }

    static async getAllOrders(): Promise<any> {
        try {
            return await OrderModel.find();
        } catch (error) {
            return error;
        }
    }

    static async getOrder(id: string): Promise<any> {
        try {
            return await OrderModel.findById(id);
        } catch (error) {
            return error;
        }
    }

    static async getProductOrder(id: string): Promise<any> {
        try {
            return await ProductsModel.findById(id);
        } catch (error) {
            return error;
        }
    }
}