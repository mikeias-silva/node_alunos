"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Usuarios = require('../models/Usuarios'); var _Usuarios2 = _interopRequireDefault(_Usuarios);

exports. default = async (req, res, next) => {
  try {
    const [, token] = req.headers.authorization.split(' ');
    const { id, email, username } = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
    req.userId = id;
    req.username = username;
    req.email = email;

    const user = await _Usuarios2.default.findOne({ where: { id, username, email } });

    if (!user) {
      return res.status(400).json({
        errors: ['Usuário invalido ou token expirado']
      });
    }
    return next();
  } catch (error) {
    return res.status(401).json({ error: ['Não autorizado'] });
  }
};
