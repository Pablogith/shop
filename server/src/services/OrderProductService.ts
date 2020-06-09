import {ProductsModel} from "../models/Schemas/OrderSchema";

export default class OrderProductService {
    static async getProductFromOrder(id: string): Promise<any> {
        try {
            return await ProductsModel.findById(id);
        } catch (error) {
            return error;
        }
    }
}