import Turmas from '../models/Turmas';

class Turmascontroller {
  async index(req, res) {
    try {
      const turmasAll = await Turmas.findAll({ attributes: ['id', 'turma', 'vagas'] });
      return res.status(200).json(turmasAll);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async findById(req, res) {
    try {
      const turmaById = await Turmas.findByPk(req.params.id);
      const { id, turma, vagas } = turmaById;
      return res.json({ id, turma, vagas });
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async store(req, res) {
    try {
      const newTurma = await Turmas.create(req.body);
      return res.status(201).json(newTurma);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const turma = await Turmas.findByPk(req.body.id);
      turma.update(req.body);
      console.log(turma._previousDataValues);
      return res.status(200).json({
        message: 'Atualizado com sucessosss!',
        previousDataValues: turma._previousDataValues,
        dataValues: turma.dataValues
      });
    } catch (error) {
      return res.status(400).json(error);
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
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }
}

export default new Turmascontroller();
