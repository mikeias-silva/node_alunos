import { Router } from 'express';
import UsuariosController from '../controllers/UsuariosController.js';
const router = new Router();

router.get('/', UsuariosController.index);
router.get('/:id', UsuariosController.findById);
router.put('/', UsuariosController.update);
router.delete('/', UsuariosController.destroy);
router.post('/', UsuariosController.store);

export default router;
