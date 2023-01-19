import Turmas from '../models/Turmas';

class Turmascontroller {
  async index(req, res) {
    try {
      const turmasAll = await Turmas.findAll();
      return res.status(200).json(turmasAll);
    } catch (error) {
      return res.status(400).json({ errors: error.erros.map((err) => err.message) });
    }
  }

  async findById(req, res) {
    try {
      const turmaById = await Turmas.findByPk(req.params.id);
      return res.json(turmaById);
    } catch (error) {
      return res.status(400).json({ errors: error.erros.map((err) => err.message) });
    }
  }

  async store(req, res) {
    try {
      const newTurma = await Turmas.create({
        turma: req.body.turma,
        vagas: req.body.vagas
      });
      return res.status(201).json(newTurma);
    } catch (error) {
      return res.status(400).json({ errors: error.erros.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      await Turmas.update({
        turma: req.body.turma,
        vagas: req.body.vagas
      }, { where: { id: req.params.id } });
      return res.status(200).json({ message: 'Atualizado com sucesso!' });
    } catch (error) {
      return res.status(400).json({ errors: error.erros.map((err) => err.message) });
    }
  }

  async destroy(req, res) {
    try {
      await Turmas.destroy({
        where: {
          id: req.params.id
        }
      });
      return res.status(200).json({ message: 'Excluído com sucesso!' });
    } catch (error) {
      return res.status(400).json({ errors: error.erros.map((err) => err.message) });
    }
  }
}

export default new Turmascontroller();
