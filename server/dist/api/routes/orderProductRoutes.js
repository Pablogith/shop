"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {"default": mod};
};
Object.defineProperty(exports, "__esModule", {value: true});
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var OrderProductController_1 = __importDefault(require("../controllers/OrderProductController"));
var router = express_1.default.Router();
exports.router = router;
router.get('/basketProduct/:id', OrderProductController_1.default.getProductOrder);
