// @ts-ignore
import mongoose, {Schema} from 'mongoose';


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
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
});

const ProductModel = mongoose.model<mongoose.Document>('Product', ProductSchema);

export {ProductModel};
