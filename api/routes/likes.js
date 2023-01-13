import express from 'express';
import likesController from '../controllers/likes.js';

const router = express.Router();

router.get('/', likesController.getLikes );
router.post('/add', likesController.addLike );
router.delete('/delete', likesController.deleteLike );

export default router;