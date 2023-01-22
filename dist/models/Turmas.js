"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Turmas extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      turma: {
        type: _sequelize2.default.STRING,
        validate: {
          min: { args: 3, msg: 'deve ser maior que 3 e menor que 20 caracateres' }
        }
      },
      vagas: {
        type: _sequelize2.default.STRING,
        validate: {
          isInt: { msg: 'deve ser inteiro' }
        }
      }
    },
    { sequelize }
    );
    return this;
  }
} exports.default = Turmas;
