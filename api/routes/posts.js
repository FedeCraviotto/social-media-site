import express from 'express';
import postController from '../controllers/posts.js';

const router = express.Router();

router.get('/find/:postId', postController.getPost);

export default router;