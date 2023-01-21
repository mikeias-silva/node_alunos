import { Router } from 'express';
import FotosController from '../controllers/FotoController.js';
import loginMiddleware from '../middlewares/loginMiddleware.js';
const router = new Router();

router.post('/upload', loginMiddleware, FotosController.uploadFoto);

export default router;
