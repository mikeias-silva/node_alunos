import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcrypt';
export default class Usuario extends Model {
  static init(sequelize) {
    super.init({
      username: {
        type: Sequelize.STRING,
        validate: {
          len: {
            args: [4, 25],
            msg: 'Campo username deve ser entre 4 e 25 caracteres'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: {
            msg: 'E-mail é inválido'
          }
        }
      },
      password_hash: {
        type: Sequelize.STRING
      },
      password: { type: Sequelize.VIRTUAL, validate: { min: { args: 6, msg: 'Senha deve ser no mínimo 6 caracteres!' } } }
    }, { sequelize });
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    return this;
  }
}
