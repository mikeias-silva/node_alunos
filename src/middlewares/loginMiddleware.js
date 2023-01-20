import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuarios';

export default async (req, res, next) => {
  try {
    const [, token] = req.headers.authorization.split(' ');
    const { id, email, username } = jwt.verify(token, process.env.TOKEN_SECRET);
    req.userId = id;
    req.username = username;
    req.email = email;

    const user = await Usuario.findOne({ where: { id, username, email } });

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
