import Usuario from '../models/Usuarios';
import jwt from 'jsonwebtoken';

class TokenController {
  async store(req, res) {
    const { email = '', password = '', username = '' } = req.body;

    if (!email || !password || !username) {
      return res.status(400).json({
        errors: ['Credenciais inválidas!']
      });
    }
    const user = await Usuario.findOne({ where: { email, username } });

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
    const token = jwt.sign({ id, email, username }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION
    });
    return res.status(200).json({ token });
  }
}

export default new TokenController();
