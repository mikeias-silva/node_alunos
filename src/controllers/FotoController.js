import Fotos from '../models/Fotos';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import Aluno from '../models/Alunos';

class FotoController {
  uploadFoto(req, res) {
    const form = new formidable.IncomingForm();
    try {
      form.parse(req, async (errForm, fields, files) => {
        // if (files.perfil.mimetype !== 'image/jpeg') {
        //   return res.send('arquivo invalido');
        // }
        // console.log('filesssssssssssssssssssssssss', fields);
        const oldPath = files.perfil.filepath;
        const newPath = path.join(__dirname, '..', '..', 'uploads', `${files.perfil.newFilename}_${files.perfil.originalFilename}`);
        fs.renameSync(oldPath, newPath);
        const fileName = `${files.perfil.newFilename}_${files.perfil.originalFilename}`;
        const originalName = files.perfil.originalFilename;

        const aluno = Aluno.findByPk(fields.aluno_id);

        if (!aluno) {
          return res.status(400).json({
            error: ['Aluno não existe!']
          });
        }

        await Fotos.create({
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

export default new FotoController();
