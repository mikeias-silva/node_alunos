import Usuario from '../models/Usuarios';

class Usuarioscontroller {
  async index(req, res) {
    try {
      const usuarios = await Usuario.findAll({ attributes: ['id', 'username', 'email'] });
      return res.json(usuarios);
    } catch (error) {
      return res.status(400).json(error.errors);
    }
  }

  async store(req, res) {
    try {
      const newUsuario = await Usuario.create(req.body);
      const { id, userna, email } = newUsuario;
      return res.status(201).json({ id, userna, email });
    } catch (error) {
      console.log(error);
      return res.status(400).json(error.errors);
    }
  }

  async findById(req, res) {
    try {
      const id = req.userId;
      const findUsuarios = await Usuario.findByPk(id);
      const { username, email } = findUsuarios;
      return res.json({ id, username, email });
    } catch (error) {
      return res.status(400).json(error.errors);
    }
  }

  async update(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.userId);
      if (!usuario) {
        return res.status(400).json({
          errors: ['Usuário não existe!'], usuario: [usuario]
        });
      }
      usuario.update(req.body);
      return res.json({ message: 'Alterado com sucesso!' });
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async destroy(req, res) {
    try {
      await Usuario.destroy({ where: { id: req.params.id } });
      return res.status(200).json({ message: 'Excluído com sucesso!' });
    } catch (error) {
      return res.status(400).json(error.errors);
    }
  }
}

export default new Usuarioscontroller();
