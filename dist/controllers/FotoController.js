"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Fotos = require('../models/Fotos'); var _Fotos2 = _interopRequireDefault(_Fotos);
var _formidable = require('formidable'); var _formidable2 = _interopRequireDefault(_formidable);
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _Alunos = require('../models/Alunos'); var _Alunos2 = _interopRequireDefault(_Alunos);

class FotoController {
  uploadFoto(req, res) {
    const form = new _formidable2.default.IncomingForm();
    try {
      form.parse(req, async (errForm, fields, files) => {
        // if (files.perfil.mimetype !== 'image/jpeg') {
        //   return res.send('arquivo invalido');
        // }
        // console.log('filesssssssssssssssssssssssss', fields);
        const oldPath = files.perfil.filepath;
        const newPath = _path2.default.join(__dirname, '..', '..', 'uploads', `${files.perfil.newFilename}_${files.perfil.originalFilename}`);
        _fs2.default.renameSync(oldPath, newPath);
        const fileName = `${files.perfil.newFilename}_${files.perfil.originalFilename}`;
        const originalName = files.perfil.originalFilename;

        const aluno = _Alunos2.default.findByPk(fields.aluno_id);

        if (!aluno) {
          return res.status(400).json({
            error: ['Aluno não existe!']
          });
        }

        await _Fotos2.default.create({
          filename: fileName,
          originalname: originalName,
          aluno_id: fields.aluno_id
        });

        return res.status(201).json({ message: 'foto enviada!' });
      });
    } catch (error) {
      return res.status(401).json({ error: ['Erro ao enviar foto!', error] });
    }
  }
}

exports. default = new FotoController();
