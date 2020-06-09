"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModel = exports.ProductModel = void 0;
// @ts-ignore
var mongoose_1 = __importStar(require("mongoose"));
var CommentSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Product',
    },
});
var CommentModel = mongoose_1.default.model('Comment', CommentSchema);
exports.CommentModel = CommentModel;
var ProductSchema = new mongoose_1.Schema({
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
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Comment'
        }],
});
var ProductModel = mongoose_1.default.model('Product', ProductSchema);
exports.ProductModel = ProductModel;
