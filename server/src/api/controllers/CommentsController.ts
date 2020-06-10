import express from 'express';
import CommentsService from "../../services/CommentsService";

export default class CommentsController {
    static async addComment(req: express.Request, res: express.Response): Promise<express.Response> {
        try {
            const {id} = req.params;
            const {comment} = req.body;

            const response = await CommentsService.addComment(id, comment);

            if (!response) {
                return res.status(422).send({
                   success: false,
                   message: response
                });
            }

            return res.status(200).send({
                success: true,
                data: response
            });
        } catch (error) {
            return res.status(500).send({
               success: false,
               message: error
            });
        }
    }

    static async getComment(req: express.Request, res: express.Response): Promise<express.Response> {
        try {
            const {id} = req.params;
            const response = await CommentsService.getComment(id);

            if (!response) {
                return res.status(422).send({
                    success: false,
                    message: response
                });
            }

            return res.status(200).send({
                success: true,
                data: response
            });
        } catch (error) {
            return res.status(500).send({
                success: false,
                message: error
            });
        }
    }

    static async getAllComments(req: express.Request, res: express.Response): Promise<express.Response> {
        try {
            const result = await CommentsService.getAllComments();

            if (result.length === 0) {
                return res.status(404).send({
                    success: false,
                    message: "Comments are empty"
                });
            }

            return res.status(200).send({
                success: true,
                data: result
            });
        } catch (error) {
            return res.status(500).send({
                success: false,
                message: error
            });
        }
    }
}