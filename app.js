import dotenv from 'dotenv';
dotenv.config();
import './src/database/index';
import express from 'express';
import alunosRoutes from './src/routes/alunosRoutes';
import turmasRoutes from './src/routes/turmasRoutes';
import usuariosRoutes from './src/routes/usuariosRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/alunos', alunosRoutes);
    this.app.use('/turmas', turmasRoutes);
    this.app.use('/usuario', usuariosRoutes);
    this.app.use('/token', tokenRoutes);
  }
}

export default new App().app;
