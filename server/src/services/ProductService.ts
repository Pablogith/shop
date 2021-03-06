import {ProductModel} from "../models/Schemas/ProductSchema";
import IProduct from "../models/IProduct";


export default class ProductService {
    static async getAllProductsFromCategory(category: string): Promise<any> {
        try {
            return await ProductModel.find({category});
        } catch (error) {
            return error;
        }
    }

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

    static async editProduct(id: string, product: IProduct): Promise<any> {
        try {
            return await ProductModel.updateOne({_id: id}, {
                $set: {
                    name: product.name,
                    price: product.price,
                    category: product.category,
                    description: product.description,
                    image: product.image,
                    currency: product.currency
                }
            });
        } catch (error) {
            return error;
        }
    }
}