import express from 'express';
import {check, ValidationChain, validationResult} from "express-validator";

export namespace commentValidation {
    export const addValidators: ValidationChain[] = [
        check('comment.author')
            .not().isEmpty()
            .withMessage('Name is required').isLength({min: 3, max: 20})
            .withMessage('Name must be at least 3 characters long and less than 20 characters'),
        check('comment.content')
            .not().isEmpty()
            .withMessage('Content is required')
            .isLength({min: 3, max: 320})
            .withMessage('Content must be at least 3 characters long and less than 200 characters'),
        check('comment.rating')
            .isNumeric()
            .withMessage('Rating must be numeric')
    ];

    export function checkAddValidation(req: express.Request, res: express.Response, next: express.NextFunction) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).send({
                success: false,
                data: req.body,
                errors: errors.mapped()
            });
        }
        next();
    }
}
