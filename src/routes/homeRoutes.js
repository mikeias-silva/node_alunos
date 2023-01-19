import { Router } from 'express';
import homeController from '../controllers/HomeController';

const router = new Router();

router.get('/', homeController.index);
router.post('/', homeController.store);
router.get('/teste', (req, res) => {
  const variable = 2;
  const dois = 2;
  if (variable === dois) {
    res.json({ mensage: 'entrou' });
    res.send('Bem vindo');
  }
  console.log('chegou aqui');
});

export default router;
