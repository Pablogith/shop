"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.productValidations = void 0;
var express_validator_1 = require("express-validator");
var productValidations;
(function (productValidations) {
    var currencies = ['EUR', 'PLN', 'USD'];
    var categories = ['flowerpot', 'vases', 'mirrors', 'candles', 'glasses'];
    productValidations.addValidators = [
        express_validator_1.check('currency')
            .trim()
            .isIn(currencies)
            .withMessage('Invalid currency')
            .optional(),
        express_validator_1.check('price')
            .trim()
            .not().isEmpty()
            .withMessage('Price is required')
            .isNumeric()
            .withMessage('Price must be numeric'),
        express_validator_1.check('name')
            .trim()
            .not().isEmpty()
            .withMessage('Name is required')
            .isLength({min: 3, max: 20})
            .withMessage('Name must be at least 3 characters long and less than 20 characters'),
        express_validator_1.check('category')
            .trim()
            .not().isEmpty()
            .withMessage('Category is required')
            .isLowercase()
            .isIn(categories)
            .withMessage('Invalid category'),
        express_validator_1.check('description')
            .trim()
            .not().isEmpty()
            .withMessage('Description is required')
            .isLength({min: 3, max: 320})
            .withMessage('Description must be at least 3 characters long and less than 320 characters'),
        express_validator_1.check('image')
            .not().isEmpty()
            .withMessage('Image is required')
    ];
    function checkAddValidation(req, res, next) {
        var errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).send({
                success: false,
                data: req.body,
                errors: errors.mapped()
            });
        }
        next();
    }
    productValidations.checkAddValidation = checkAddValidation;
})(productValidations = exports.productValidations || (exports.productValidations = {}));
