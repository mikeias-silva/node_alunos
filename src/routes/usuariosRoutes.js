import { Router } from 'express';
import UsuariosController from '../controllers/UsuariosController.js';
import loginMiddleware from '../middlewares/loginMiddleware.js';
const router = new Router();

router.get('/listAll', UsuariosController.index);
router.get('/', loginMiddleware, UsuariosController.findById);
router.put('/:id', loginMiddleware, UsuariosController.update);
router.delete('/', UsuariosController.destroy);
router.post('/', loginMiddleware, UsuariosController.store);

router.get('/teste', loginMiddleware, (req, res) => {
  res.json({ id: req.userId, username: req.username, email: req.email });
});

export default router;
