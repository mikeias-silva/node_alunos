import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';
import Aluno from '../models/Alunos.js';
import Turmas from '../models/Turmas.js';
import Usuario from '../models/Usuarios.js';
const models = [Aluno, Turmas, Usuario];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
