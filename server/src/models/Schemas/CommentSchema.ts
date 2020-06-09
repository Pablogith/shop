import mongoose, {Schema} from 'mongoose';

const CommentSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        max: 5,
        min: 0
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
    },
});

const CommentModel = mongoose.model<mongoose.Document>('Comment', CommentSchema);
export {CommentModel};
