import Sequelize, { Model } from 'sequelize';

export default class Professores extends Model {
  static init(sequelize) {
    super.init({

    },
    { sequelize }
    );
    return this;
  }
}
