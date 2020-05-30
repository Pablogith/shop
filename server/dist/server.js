"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {"default": mod};
};
Object.defineProperty(exports, "__esModule", {value: true});
var app_1 = __importDefault(require("./app"));
var productRoutes_1 = require("./api/routes/productRoutes");
var app = new app_1.default([productRoutes_1.router], 3000);
app.listen();
