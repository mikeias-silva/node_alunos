"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Alunos = require('../models/Alunos'); var _Alunos2 = _interopRequireDefault(_Alunos);
var _Fotos = require('../models/Fotos'); var _Fotos2 = _interopRequireDefault(_Fotos);
class AlunoController {
  async index(req, res) {
    try {
      const alunos = await _Alunos2.default.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email'],
        include: {
          model: _Fotos2.default,
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
      const newAluno = await _Alunos2.default.create(req.body);
      const { id, nome, sobrenome, email } = newAluno;
      return res.status(201).json({ id, nome, sobrenome, email });
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const aluno = await _Alunos2.default.findByPk(req.body.id);
      const novosDados = await aluno.update(req.body);
      const { id, nome, sobrenome, email, idade } = novosDados;
      return res.status(200).json({ message: 'Alterado com sucesso!', alterado: { id, nome, sobrenome, email, idade } });
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      await _Alunos2.default.destroy({
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
      const aluno = await _Alunos2.default.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'sobrenome', 'email'],
        include: {
          model: _Fotos2.default,
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

exports. default = new AlunoController();
