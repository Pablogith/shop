"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var CommentsController_1 = __importDefault(require("../controllers/CommentsController"));
var commentValidation_1 = require("../../middlewares/commentValidation");
var router = express_1.default.Router();
exports.router = router;
router.get('/comments', CommentsController_1.default.getAllComments);
router.get('/comments/:id', CommentsController_1.default.getComment);
router.post('/comments/:id', commentValidation_1.commentValidation.addValidators, commentValidation_1.commentValidation.checkAddValidation, CommentsController_1.default.addComment);
