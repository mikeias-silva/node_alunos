import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';

const router = new Router();

router.get('/', AlunoController.index);
router.get('/:id', AlunoController.findById);
router.put('/', AlunoController.update);
router.post('/', AlunoController.store);
router.delete('/:id', AlunoController.delete);

export default router;
