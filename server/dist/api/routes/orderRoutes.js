"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {"default": mod};
};
Object.defineProperty(exports, "__esModule", {value: true});
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var OrderController_1 = __importDefault(require("../controllers/OrderController"));
var router = express_1.default.Router();
exports.router = router;
router.post('/orders', OrderController_1.default.createOrder);
router.get('/orders', OrderController_1.default.getAllOrders);
router.get('/orders/:id', OrderController_1.default.getOrder);
