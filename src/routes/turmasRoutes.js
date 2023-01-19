import { Router } from 'express';
import TurmasController from '../controllers/TurmasController';

const router = new Router();

router.get('/', TurmasController.index);
router.get('/:id', TurmasController.findById);
router.put('/', TurmasController.update);
router.post('/', TurmasController.store);
router.delete('/:id', TurmasController.destroy);

export default router;
