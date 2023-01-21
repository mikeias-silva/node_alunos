import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';
import Aluno from '../models/Alunos.js';
import Turmas from '../models/Turmas.js';
import Usuario from '../models/Usuarios.js';
import Foto from '../models/Fotos.js';
const models = [Aluno, Turmas, Usuario, Foto];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
