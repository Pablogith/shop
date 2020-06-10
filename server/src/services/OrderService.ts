import {OrderModel, ProductsModel} from "../models/Schemas/OrderSchema";
import mongoose from 'mongoose';


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