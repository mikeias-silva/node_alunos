import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';
import loginMiddleware from '../middlewares/loginMiddleware';

const router = new Router();

router.get('/listAll', loginMiddleware, AlunoController.index);
router.get('/:id', loginMiddleware, AlunoController.findById);
router.put('/', loginMiddleware, AlunoController.update);
router.post('/', loginMiddleware, AlunoController.store);
router.delete('/:id', loginMiddleware, AlunoController.delete);

export default router;
