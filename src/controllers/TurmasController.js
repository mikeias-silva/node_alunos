import Turmas from '../models/Turmas';

class Turmascontroller {
  async index(req, res) {
    try {
      const turmasAll = await Turmas.findAll();
      res.status(200).json(turmasAll);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async findById(req, res) {
    try {
      const turmaById = await Turmas.findByPk(req.params.id);
      res.json(turmaById);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async store(req, res) {
    try {
      const newTurma = await Turmas.create({
        turma: req.body.turma,
        vagas: req.body.vagas
      });
      res.status(201).json(newTurma);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async update(req, res) {
    try {
      await Turmas.update({
        turma: req.body.turma,
        vagas: req.body.vagas
      }, { where: { id: req.params.id } });
      res.status(200).json({ message: 'Atualizado com sucesso!' });
    } catch (error) {
      res.status(400).json(error.errors);
    }
  }

  async destroy(req, res) {
    try {
      await Turmas.destroy({
        where: {
          id: req.params.id
        }
      });
      res.status(200).json({ message: 'Excluído com sucesso!' });
    } catch (error) {
      res.status(400).json(error.errors);
    }
  }
}

export default new Turmascontroller();
