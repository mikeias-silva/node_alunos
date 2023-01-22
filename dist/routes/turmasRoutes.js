"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _TurmasController = require('../controllers/TurmasController'); var _TurmasController2 = _interopRequireDefault(_TurmasController);
var _loginMiddleware = require('../middlewares/loginMiddleware'); var _loginMiddleware2 = _interopRequireDefault(_loginMiddleware);

const router = new (0, _express.Router)();

router.get('/listAll', _loginMiddleware2.default, _TurmasController2.default.index);
router.get('/:id', _loginMiddleware2.default, _TurmasController2.default.findById);
router.put('/', _loginMiddleware2.default, _TurmasController2.default.update);
router.post('/', _loginMiddleware2.default, _TurmasController2.default.store);
router.delete('/:id', _loginMiddleware2.default, _TurmasController2.default.destroy);

exports. default = router;
