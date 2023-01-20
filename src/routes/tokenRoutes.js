import { Router } from 'express';
import TokenController from '../controllers/TokenController';
const router = new Router();

router.post('/newToken', TokenController.store);
export default router;
