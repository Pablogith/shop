import mongoose, {Schema} from 'mongoose';

const ProductsSchema = new Schema({
    products: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
    },
    amount: {
        type: Number,
        required: true,
        default: 1
    }
});

const ProductsModel = mongoose.model<mongoose.Document>('ProductOrder', ProductsSchema);

const OrderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    homeNumber: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    products: {
        type: Schema.Types.ObjectId,
        ref: 'ProductOrder'
    }
});

const OrderModel = mongoose.model<mongoose.Document>('Order', OrderSchema);

export {OrderModel, ProductsModel};
