import express from 'express';
import userController from '../controllers/users.js';

const router = express.Router();

router.get('/find/:userId', userController.getUser);

export default router;