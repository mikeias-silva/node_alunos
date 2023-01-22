"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Usuarios = require('../models/Usuarios'); var _Usuarios2 = _interopRequireDefault(_Usuarios);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

class TokenController {
  async store(req, res) {
    const { email = '', password = '', username = '' } = req.body;

    if (!email || !password || !username) {
      return res.status(400).json({
        errors: ['Credenciais inválidas!']
      });
    }
    const user = await _Usuarios2.default.findOne({ where: { email, username } });

    if (!user) {
      return res.status(400).json({
        errors: ['Usuário nao existe ou inválido!']
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(400).json({
        errors: ['Senha inválida!']
      });
    }
    const { id } = user;
    const token = _jsonwebtoken2.default.sign({ id, email, username }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION
    });
    return res.status(200).json({ token });
  }
}

exports. default = new TokenController();
