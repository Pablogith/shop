import express from 'express';
import CommentsController from "../controllers/CommentsController";
import {commentValidation} from "../../middlewares/commentValidation";

const router: any = express.Router();

router.get('/comments', CommentsController.getAllComments);

router.get('/comments/:id', CommentsController.getComment);

router.post('/comments/:id',
    commentValidation.addValidators,
    commentValidation.checkAddValidation,
    CommentsController.addComment);


export {router};
