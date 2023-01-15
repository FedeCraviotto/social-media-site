import express from 'express';
import followsController from '../controllers/follows.js';

const router = express.Router();

router.get('/', followsController.getFollow );
router.post('/add', followsController.addFollow );
router.delete('/delete', followsController.deleteFollow );

export default router;