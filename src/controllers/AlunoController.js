import Aluno from '../models/Alunos';
class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll();
      return res.status(200).json(alunos);
    } catch (error) {
      return res.status(400).json({ errors: error.erros.map((err) => err.message) });
    }
  }

  async store(req, res) {
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;
    const email = req.body.email;
    const idade = req.body.idade;

    try {
      const newAluno = await Aluno.create({
        nome,
        sobrenome,
        email,
        idade
      });
      return res.status(201).json(newAluno);
    } catch (error) {
      return res.status(400).json({ errors: error.erros.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      await Aluno.update(
        {
          nome: req.body.nome,
          sobrenome: req.body.sobrenome,
          idade: req.body.idade
        },
        {
          where: { id: req.body.id }
        });
      return res.status(200).json({ message: 'Alterado com sucesso!' });
    } catch (error) {
      return res.status(400).json({ errors: error.erros.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    if (req.params.id === 7) {
      return res.json({ message: 'Não é possível excluior CR7' });
    }
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
      return res.status(400).json({ errors: error.erros.map((err) => err.message) });
    }
  }

  async findById(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      return res.status(200).json(aluno);
    } catch (error) {
      return res.status(400).json({ errors: error.erros.map((err) => err.message) });
    }
  }
}

export default new AlunoController();
