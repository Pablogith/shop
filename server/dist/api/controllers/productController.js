"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ProductService_1 = __importDefault(require("../../services/ProductService"));
var ProductController = /** @class */ (function () {
    function ProductController() {
    }

    ProductController.getAllProductsFromCategory = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var category, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        category = req.params.category;
                        return [4 /*yield*/, ProductService_1.default.getAllProductsFromCategory(category)];
                    case 1:
                        response = _a.sent();
                        if (!response) {
                            return [2 /*return*/, res.status(404).send({
                                success: false,
                                status: 404,
                                message: "Not Found"
                            })];
                        }
                        return [2 /*return*/, res.status(200).send({
                            success: true,
                            data: response
                        })];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, res.status(500).send({
                            success: false,
                            error: error_1
                        })];
                    case 3:
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductController.getAllProducts = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, ProductService_1.default.getAllProducts()];
                    case 1:
                        response = _a.sent();
                        if (!response) {
                            return [2 /*return*/, res.status(404).send({
                                success: false,
                                status: 404,
                                message: "Not Found"
                            })];
                        }
                        return [2 /*return*/, res.status(200).send({
                            success: true,
                            data: response
                        })];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, res.status(500).send({
                            success: false,
                            error: error_2
                        })];
                    case 3:
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductController.getProduct = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4 /*yield*/, ProductService_1.default.getProduct(id)];
                    case 1:
                        response = _a.sent();
                        if (!response) {
                            return [2 /*return*/, res.status(404).send({
                                success: false,
                                status: 404,
                                message: "Not Found"
                            })];
                        }
                        return [2 /*return*/, res.status(200).send({
                            success: true,
                            data: response
                        })];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, res.status(500).send({
                            success: false,
                            error: error_3
                        })];
                    case 3:
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductController.createProduct = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name_1, price, category, description, image, currency, isGood, response, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = req.body, name_1 = _a.name, price = _a.price, category = _a.category, description = _a.description, image = _a.image, currency = _a.currency;
                        isGood = [name_1, price, category, description, image].every(function (value) {
                            return !!value;
                        });
                        if (!isGood) return [3 /*break*/, 2];
                        return [4 /*yield*/, ProductService_1.default.addProduct({
                            name: name_1,
                            price: price,
                            category: category,
                            description: description,
                            image: image,
                            currency: currency
                        })];
                    case 1:
                        response = _b.sent();
                        if (!response) {
                            return [2 /*return*/, res.status(404).send({
                                success: false,
                                status: 404,
                                message: 'Product not found'
                            })];
                        }
                        return [2 /*return*/, res.status(200).send({
                            success: true,
                            data: response
                        })];
                    case 2:
                        return [2 /*return*/, res.status(400).send({
                            success: false,
                            status: 400,
                            message: 'Invalid request'
                        })];
                    case 3:
                        error_4 = _b.sent();
                        return [2 /*return*/, res.status(500).send({
                            success: false,
                            error: error_4
                        })];
                    case 4:
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductController.deleteProduct = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, response, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4 /*yield*/, ProductService_1.default.deleteProduct(id)];
                    case 1:
                        response = _a.sent();
                        if (!response) {
                            return [2 /*return*/, res.status(404).send({
                                success: false,
                                status: 404,
                                message: "Not Found"
                            })];
                        }
                        return [2 /*return*/, res.status(200).send({
                            success: true,
                            data: response
                        })];
                    case 2:
                        error_5 = _a.sent();
                        return [2 /*return*/, res.status(500).send({
                            success: false,
                            error: error_5
                        })];
                    case 3:
                        return [2 /*return*/];
                }
            });
        });
    };
    return ProductController;
}());
exports.default = ProductController;
