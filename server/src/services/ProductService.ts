import {IProduct, ProductModel} from "../models/Product";

export default class ProductService {
    static async getAllProducts(): Promise<any> {
        try {
            return await ProductModel.find();
        } catch (error) {
            return error;
        }
    }

    static async getProduct(id: any): Promise<any> {
        try {
            return await ProductModel.findById(id);
        } catch (error) {
            return error;
        }
    }

    static async addProduct(product: IProduct): Promise<any> {
        try {
            const _product: any = new ProductModel(product);
            return await _product.save();
        } catch (error) {
            return error;
        }
    }

    static async deleteProduct(id: any): Promise<any> {
        try {
            return await ProductModel.findByIdAndDelete(id);
        } catch (error) {
            return error;
        }
    }
}