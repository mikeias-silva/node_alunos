import { Router } from 'express';
import TurmasController from '../controllers/TurmasController';
import loginMiddleware from '../middlewares/loginMiddleware';

const router = new Router();

router.get('/', loginMiddleware, TurmasController.index);
router.get('/:id', loginMiddleware, TurmasController.findById);
router.put('/', loginMiddleware, TurmasController.update);
router.post('/', loginMiddleware, TurmasController.store);
router.delete('/:id', loginMiddleware, TurmasController.destroy);

export default router;
