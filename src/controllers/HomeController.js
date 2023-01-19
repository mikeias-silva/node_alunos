import Aluno from '../models/Alunos';

class HomeController {
  index(req, res) {
    res.json({
      message: 'tudo certo'
    });
  }

  store(req, res) {
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;
    res.json({
      nome,
      sobrenome
    });
  }

  async aluno(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'maria',
      sobrenome: 'joaquina',
      email: 'email@email.com',
      idade: 35
    });
    res.json(novoAluno);
  }

  async listaAlunos(req, res) {
    const todosAlunos = await Aluno.findOne();
    res.json(todosAlunos);
  }
}

export default new HomeController();
