"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING
      },
      sobrenome: _sequelize2.default.STRING,
      email: {
        type: _sequelize2.default.STRING,
        validate: { isEmail: { msg: 'Email inválido' } }
      },
      idade: {
        type: _sequelize2.default.INTEGER,
        validate: {
          isInt: true
        }
      }
    }, { sequelize });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Fotos, { foreignKey: 'aluno_id' });
  }
} exports.default = Aluno;
// import Sequelize, { Model } from 'sequelize';

// module.exports = (sequelize, DataTypes) => {
//   class Alunos extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       this.init();
//     }
//   }
//   Alunos.init({
//     nome: DataTypes.STRING,
//     sobrenome: DataTypes.STRING,
//     email: DataTypes.STRING,
//     idade: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Alunos'
//   });
//   return Alunos;
// };
