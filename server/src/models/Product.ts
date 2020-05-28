import mongoose, {Schema} from 'mongoose';

interface IProduct {
    name: string;
    price: number;
    category: string;
    description: string;
    image: string;
    currency: string;
}

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    currency: {
        type: String,
        required: true,
        default: 'PLN'
    }
});

const ProductModel = mongoose.model('Product', ProductSchema);

export {ProductModel, IProduct};
