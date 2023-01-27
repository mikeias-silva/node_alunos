import Sequelize, { Model } from 'sequelize';

export default class Matriculas extends Model {
  static init(sequelize) {
    super.init({

    },
    { sequelize }
    );
    return this;
  }
}
