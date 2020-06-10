import {ProductModel} from "../models/Schemas/ProductSchema";
import {CommentModel} from "../models/Schemas/CommentSchema";

export default class CommentsService {
    static async addComment(id: string, comment: object): Promise<any> {
        try {
            const product = await ProductModel.findById(id);
            // @ts-ignore
            const comments = product.comments;
            // @ts-ignore
            const {author, productId, rating, content} = comment;
            const _newComment = await new CommentModel({ author, content, rating, productId });
            const _newCommentId = _newComment;
            _newComment.save();
            comments.push(_newCommentId)

            return await ProductModel.updateOne({ _id: id}, {
                $set: { comments: comments }
            });
        } catch (error) {
            return error;
        }
    }

    static async getComment(id: string): Promise<any> {
        try {
            return await CommentModel.findById(id);
        } catch (error) {
            return error;
        }
    }

    static async getAllComments(): Promise<any> {
        try {
            return await CommentModel.find();
        } catch (error) {
            return error;
        }
    }
}