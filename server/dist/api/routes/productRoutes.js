"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
// @ts-ignore
var ProductController_1 = __importDefault(require("../controllers/ProductController"));
var productValidations_1 = require("../../helpers/productValidations");
var router = express_1.default.Router();
exports.router = router;
router.get('/products/:category', ProductController_1.default.getAllProductsFromCategory);
router.get('/products/:category/:id', ProductController_1.default.getProduct);
router.get('/products', ProductController_1.default.getAllProducts);
router.post('/products', productValidations_1.productValidations.addValidators, productValidations_1.productValidations.checkAddValidation, ProductController_1.default.createProduct);
router.delete('/products/:id', ProductController_1.default.deleteProduct);
router.put('/products/:id', productValidations_1.productValidations.addValidators, productValidations_1.productValidations.checkAddValidation, ProductController_1.default.editProduct);
