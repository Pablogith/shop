import {OrderModel, ProductsModel} from "../models/Order";

export default class OrderService {
    static async addOrder(order: any, product: any): Promise<any> {
        try {
            const _productOrder = new ProductsModel(product);
            const _product = await _productOrder.save();

            order.products = _product._id;

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