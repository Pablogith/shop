"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {"default": mod};
};
Object.defineProperty(exports, "__esModule", {value: true});
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var productController_1 = require("../controllers/productController");
var productValidations_1 = require("../../helpers/productValidations");
var router = express_1.default.Router();
exports.router = router;
router.get('/products', productController_1.productController.getAllProducts);
router.get('/products/:id', productController_1.productController.getProduct);
router.post('/products', productValidations_1.productValidations.addValidators, productValidations_1.productValidations.checkAddValidation, productController_1.productController.createProduct);
router.delete('/products/:id', productController_1.productController.deleteProduct);
