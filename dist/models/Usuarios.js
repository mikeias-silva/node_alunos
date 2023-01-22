"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcrypt = require('bcrypt'); var _bcrypt2 = _interopRequireDefault(_bcrypt);

 class Usuario extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      username: {
        type: _sequelize2.default.STRING,
        validate: {
          len: {
            args: [4, 25],
            msg: 'Campo username deve ser entre 4 e 25 caracteres'
          }
        }
      },
      email: {
        type: _sequelize2.default.STRING,
        validate: {
          isEmail: {
            msg: 'E-mail é inválido'
          }
        }
      },
      password_hash: {
        type: _sequelize2.default.STRING
      },
      password: { type: _sequelize2.default.VIRTUAL, validate: { min: { args: 6, msg: 'Senha deve ser no mínimo 6 caracteres!' } } }
    }, { sequelize });
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await _bcrypt2.default.hash(user.password, 8);
      }
    });
    return this;
  }

  passwordIsValid(password) {
    return _bcrypt2.default.compare(password, this.password_hash);
  }
} exports.default = Usuario;
