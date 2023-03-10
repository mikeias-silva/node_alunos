import Aluno from '../models/Alunos';
import Fotos from '../models/Fotos';
class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email'],
        include: {
          model: Fotos,
          attributes: ['id', 'originalname', 'filename']
        }
      });
      return res.status(200).json(alunos);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async store(req, res) {
    try {
      const newAluno = await Aluno.create(req.body);
      const { id, nome, sobrenome, email } = newAluno;
      return res.status(201).json({ id, nome, sobrenome, email });
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.body.id);
      const novosDados = await aluno.update(req.body);
      const { id, nome, sobrenome, email, idade } = novosDados;
      return res.status(200).json({ message: 'Alterado com sucesso!', alterado: { id, nome, sobrenome, email, idade } });
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      await Aluno.destroy({
        where: {
          id: req.params.id
        }
      });
      return res.status(200).json({
        message: 'Excluido com sucesso!'
      });
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async findById(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'sobrenome', 'email'],
        include: {
          model: Fotos,
          attributes: ['url', 'filename']
        }
      });
      // const { id, nome, sobrenome, email } = aluno;
      return res.status(200).json(aluno);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }
}

export default new AlunoController();
