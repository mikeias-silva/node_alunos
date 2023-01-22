"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');
_dotenv2.default.config();
require('./database/index');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _alunosRoutes = require('./routes/alunosRoutes'); var _alunosRoutes2 = _interopRequireDefault(_alunosRoutes);
var _turmasRoutes = require('./routes/turmasRoutes'); var _turmasRoutes2 = _interopRequireDefault(_turmasRoutes);
var _usuariosRoutes = require('./routes/usuariosRoutes'); var _usuariosRoutes2 = _interopRequireDefault(_usuariosRoutes);
var _tokenRoutes = require('./routes/tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _fotosRoutes = require('./routes/fotosRoutes'); var _fotosRoutes2 = _interopRequireDefault(_fotosRoutes);
class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname)));
  }

  routes() {
    this.app.use('/alunos', _alunosRoutes2.default);
    this.app.use('/turmas', _turmasRoutes2.default);
    this.app.use('/usuario', _usuariosRoutes2.default);
    this.app.use('/token', _tokenRoutes2.default);
    this.app.use('/fotos', _fotosRoutes2.default);
  }
}

exports. default = new App().app;
