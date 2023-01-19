import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';
import Aluno from '../models/Alunos.js';
import Turmas from '../models/Turmas.js';

const models = [Aluno, Turmas];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
