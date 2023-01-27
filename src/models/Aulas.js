import Sequelize, { Model } from 'sequelize';

export default class Aulas extends Model {
  static init(sequelize) {
    super.init({

    },
    { sequelize }
    );
    return this;
  }
}
