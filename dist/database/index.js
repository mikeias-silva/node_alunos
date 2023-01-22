"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _databasejs = require('../config/database.js'); var _databasejs2 = _interopRequireDefault(_databasejs);
var _Alunosjs = require('../models/Alunos.js'); var _Alunosjs2 = _interopRequireDefault(_Alunosjs);
var _Turmasjs = require('../models/Turmas.js'); var _Turmasjs2 = _interopRequireDefault(_Turmasjs);
var _Usuariosjs = require('../models/Usuarios.js'); var _Usuariosjs2 = _interopRequireDefault(_Usuariosjs);
var _Fotosjs = require('../models/Fotos.js'); var _Fotosjs2 = _interopRequireDefault(_Fotosjs);
const models = [_Alunosjs2.default, _Turmasjs2.default, _Usuariosjs2.default, _Fotosjs2.default];
const connection = new (0, _sequelize2.default)(_databasejs2.default);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
