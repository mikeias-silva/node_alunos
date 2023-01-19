import Aluno from '../models/Alunos';
class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll();
      res.json(alunos);
    } catch (error) {
      res.status(500).json({ message: 'erro: '.error });
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
      res.status(201).json(newAluno);
    } catch (error) {
      res.status(400).json(error.errors);
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
    } catch (error) {
      res.status(500).json({ message: 'error '.error });
    }
    res.status(200).json({ message: 'Alterado com sucesso!' });
  }

  async delete(req, res) {
    if (req.params.id === 7) {
      res.json({ message: 'Não é possível excluior CR7' });
      return;
    }
    try {
      await Aluno.destroy({
        where: {
          id: req.params.id
        }
      });
      res.status(200).json({
        message: 'Excluido com sucesso!'
      });
    } catch (error) {
      res.status(500).json({
        message: 'error: '.error
      });
    }
  }

  async findById(req, res) {
    const aluno = await Aluno.findByPk(req.params.id);
    if (aluno !== null) {
      res.json(aluno);
    } else {
      res.json({ message: 'Não existe!' });
    }
  }
}

export default new AlunoController();
