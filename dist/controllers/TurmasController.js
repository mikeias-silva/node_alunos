"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Turmas = require('../models/Turmas'); var _Turmas2 = _interopRequireDefault(_Turmas);

class Turmascontroller {
  async index(req, res) {
    try {
      const turmasAll = await _Turmas2.default.findAll({ attributes: ['id', 'turma', 'vagas'] });
      return res.status(200).json(turmasAll);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async findById(req, res) {
    try {
      const turmaById = await _Turmas2.default.findByPk(req.params.id);
      const { id, turma, vagas } = turmaById;
      return res.json({ id, turma, vagas });
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async store(req, res) {
    try {
      const newTurma = await _Turmas2.default.create(req.body);
      return res.status(201).json(newTurma);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const turma = await _Turmas2.default.findByPk(req.body.id);
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
      await _Turmas2.default.destroy({
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

exports. default = new Turmascontroller();
