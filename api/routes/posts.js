import express from 'express';
import postController from '../controllers/posts.js';

const router = express.Router();

router.get('/', postController.getPosts);

export default router;