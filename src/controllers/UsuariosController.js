import Usuario from '../models/Usuarios';

class Usuarioscontroller {
  async index(req, res) {
    try {
      const usuarios = await Usuario.findAll();
      return res.json(usuarios);
    } catch (error) {
      return res.status(400).json({ errors: error.erros.map((err) => err.message) });
    }
  }

  async store(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    try {
      const newUsuario = await Usuario.create({
        username,
        password,
        email
      });
      return res.status(201).json(newUsuario);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ errors: error.erros.map((err) => err.message) });
    }
  }

  async findById(req, res) {
    try {
      const findUsuarios = await Usuario.findByPk(req.params.id);
      return res.json(findUsuarios);
    } catch (error) {
      return res.status(400).json({ errors: error.erros.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não encontrado!']
        });
      }
      const usuario = await Usuario.findByPk(req.params.id);
      if (!usuario) {
        return res.status(400).json({
          errors: ['Usuário não existe!']
        });
      }
      usuario.update(req.body);
      return res.json({ message: 'Alterado com sucesso!' });
    } catch (error) {
      return res.status(400).json({ errors: error.erros.map((err) => err.message) });
    }
  }

  async destroy(req, res) {
    try {
      await Usuario.destroy({ where: { id: req.params.id } });
      return res.status(200).json({ message: 'Excluído com sucesso!' });
    } catch (error) {
      return res.status(400).json({ errors: error.erros.map((err) => err.message) });
    }
  }
}

export default new Usuarioscontroller();
