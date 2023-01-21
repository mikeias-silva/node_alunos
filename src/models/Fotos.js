import Sequelize, { Model } from 'sequelize';
export default class Fotos extends Model {
  static init(sequelize) {
    super.init({
      filename: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'Não pode ser vazio'
          }
        }
      },
      originalname: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'Não pode ser vazio'
          }
        }
      },
      aluno_id: {
        type: Sequelize.INTEGER,
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
        type: Sequelize.VIRTUAL,
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
}
