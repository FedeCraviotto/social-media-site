import express from 'express';
import commentsController from '../controllers/comments.js';

const router = express.Router();

router.post('/add', commentsController.addComment);
router.get('/', commentsController.getComments);
router.delete("/:id", commentsController.deleteComment);

export default router;