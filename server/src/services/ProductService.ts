import express from 'express';
import {ProductModel} from "../models/Product";
import IProduct from "../models/IProduct";

export default class ProductService {
    static async getAllProducts(): Promise<any> {
        try {
            return await ProductModel.find();
        } catch (error) {
            return error;
        }
    }

    static async getProduct(id: string): Promise<any> {
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

    static async deleteProduct(id: string): Promise<any> {
        try {
            return await ProductModel.findByIdAndDelete(id);
        } catch (error) {
            return error;
        }
    }
}

export function productValidation(req: express.Request, res: express.Response): void {

}