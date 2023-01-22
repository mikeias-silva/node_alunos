"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _FotoControllerjs = require('../controllers/FotoController.js'); var _FotoControllerjs2 = _interopRequireDefault(_FotoControllerjs);
var _loginMiddlewarejs = require('../middlewares/loginMiddleware.js'); var _loginMiddlewarejs2 = _interopRequireDefault(_loginMiddlewarejs);
const router = new (0, _express.Router)();

router.post('/upload', _loginMiddlewarejs2.default, _FotoControllerjs2.default.uploadFoto);

exports. default = router;
