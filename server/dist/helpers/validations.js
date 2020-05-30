"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.validations = void 0;
var express_validator_1 = require("express-validator");
var validations;
(function (validations) {
    validations.validateAddProduct = [
        express_validator_1.check('currency')
            .trim()
            .optional(),
        express_validator_1.check('price')
            .trim()
            .not().isEmpty()
            .isNumeric()
            .withMessage('Price is required'),
        express_validator_1.check('name')
            .trim()
            .not().isEmpty()
            .isLength({min: 3, max: 20})
            .withMessage('Name is required'),
        express_validator_1.check('category')
            .trim()
            .not().isEmpty()
            .withMessage('Category is required'),
        express_validator_1.check('description')
            .trim()
            .not().isEmpty()
            .withMessage('Description is required'),
        express_validator_1.check('image')
            .trim()
            .not().isEmpty()
            .withMessage('Image is required'),
        express_validator_1.sanitizeBody('*').escape()
    ];
})(validations = exports.validations || (exports.validations = {}));
