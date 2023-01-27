import Sequelize, { Model } from 'sequelize';

export default class Frequencias extends Model {
  static init(sequelize) {
    super.init({

    },
    { sequelize }
    );
    return this;
  }
}
