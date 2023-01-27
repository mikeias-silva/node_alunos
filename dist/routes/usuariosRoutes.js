"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UsuariosControllerjs = require('../controllers/UsuariosController.js'); var _UsuariosControllerjs2 = _interopRequireDefault(_UsuariosControllerjs);
var _loginMiddlewarejs = require('../middlewares/loginMiddleware.js'); var _loginMiddlewarejs2 = _interopRequireDefault(_loginMiddlewarejs);
const router = new (0, _express.Router)();

router.get('/listAll', _UsuariosControllerjs2.default.index);
router.get('/', _loginMiddlewarejs2.default, _UsuariosControllerjs2.default.findById);
router.put('/:id', _loginMiddlewarejs2.default, _UsuariosControllerjs2.default.update);
router.delete('/', _UsuariosControllerjs2.default.destroy);
router.post('/', _UsuariosControllerjs2.default.store);

router.get('/teste', _loginMiddlewarejs2.default, (req, res) => {
  res.json({ id: req.userId, username: req.username, email: req.email });
});

exports. default = router;
