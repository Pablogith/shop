"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var productRoutes_1 = require("./api/routes/productRoutes");
var orderRoutes_1 = require("./api/routes/orderRoutes");
var orderProductRoutes_1 = require("./api/routes/orderProductRoutes");
var commentsRoutes_1 = require("./api/routes/commentsRoutes");
var base_1 = require("./api/routes/base");
var app = new app_1.default([
    productRoutes_1.router,
    orderRoutes_1.router,
    orderProductRoutes_1.router,
    commentsRoutes_1.router,
    base_1.router
], 3000);
app.listen();
