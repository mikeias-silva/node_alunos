import Sequelize, { Model } from 'sequelize';

export default class Turmas extends Model {
  static init(sequelize) {
    super.init({
      turma: {
        type: Sequelize.STRING,
        validate: {
          min: { args: 3, msg: 'deve ser maior que 3 e menor que 20 caracateres' }
        }
      },
      vagas: {
        type: Sequelize.STRING,
        validate: {
          isInt: { msg: 'deve ser inteiro' }
        }
      }
    },
    { sequelize }
    );
    return this;
  }
}
