import Sequelize, { Model } from 'sequelize';

export default class Turmas extends Model {
  static init(sequelize) {
    super.init({
      turma: {
        type: Sequelize.STRING
      },
      vagas: {
        type: Sequelize.STRING,
        validate: {
          isInt: true
        }
      }
    },
    { sequelize }
    );
    return this;
  }
}
