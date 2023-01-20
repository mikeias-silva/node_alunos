import Aluno from '../models/Alunos';
class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll({ attributes: ['id', 'nome', 'sobrenome', 'email'] });
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
      aluno.update(req.body);
      return res.status(200).json({ message: 'Alterado com sucesso!' });
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
      const aluno = await Aluno.findByPk(req.params.id);
      const { id, nome, sobrenome, email } = aluno;
      return res.status(200).json({ id, nome, sobrenome, email });
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }
}

export default new AlunoController();
