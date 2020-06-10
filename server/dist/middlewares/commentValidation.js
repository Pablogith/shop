"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentValidation = void 0;
var express_validator_1 = require("express-validator");
var commentValidation;
(function (commentValidation) {
    commentValidation.addValidators = [
        express_validator_1.check('comment.author')
            .not().isEmpty()
            .withMessage('Name is required').isLength({ min: 3, max: 20 })
            .withMessage('Name must be at least 3 characters long and less than 20 characters'),
        express_validator_1.check('comment.content')
            .not().isEmpty()
            .withMessage('Content is required')
            .isLength({ min: 3, max: 320 })
            .withMessage('Content must be at least 3 characters long and less than 200 characters'),
        express_validator_1.check('comment.rating')
            .isNumeric()
            .withMessage('Rating must be numeric')
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
    commentValidation.checkAddValidation = checkAddValidation;
})(commentValidation = exports.commentValidation || (exports.commentValidation = {}));
