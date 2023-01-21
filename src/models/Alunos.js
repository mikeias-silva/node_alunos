import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING
      },
      sobrenome: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        validate: { isEmail: { msg: 'Email inválido' } }
      },
      idade: {
        type: Sequelize.INTEGER,
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
}
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
