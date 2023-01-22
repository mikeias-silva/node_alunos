"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
 class Fotos extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      filename: {
        type: _sequelize2.default.STRING,
        validate: {
          notEmpty: {
            msg: 'Não pode ser vazio'
          }
        }
      },
      originalname: {
        type: _sequelize2.default.STRING,
        validate: {
          notEmpty: {
            msg: 'Não pode ser vazio'
          }
        }
      },
      aluno_id: {
        type: _sequelize2.default.INTEGER,
        validate: {
          isInt: {
            msg: 'precisa ser um numero inteiro'
          },
          notEmpty: {
            msg: 'Não pode ser vazio'
          }
        }
      },
      url: {
        type: _sequelize2.default.VIRTUAL,
        get() {
          return `${process.env.URL_BASE}/uploads/${this.getDataValue('filename')}`;
        }
      }
    }, { sequelize });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
} exports.default = Fotos;
