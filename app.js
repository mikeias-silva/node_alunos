import dotenv from 'dotenv';
import { resolve } from 'path';
dotenv.config();
import './src/database/index';
import express from 'express';
import alunosRoutes from './src/routes/alunosRoutes';
import turmasRoutes from './src/routes/turmasRoutes';
import usuariosRoutes from './src/routes/usuariosRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import fotoRoutes from './src/routes/fotosRoutes';
class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname)));
  }

  routes() {
    this.app.use('/alunos', alunosRoutes);
    this.app.use('/turmas', turmasRoutes);
    this.app.use('/usuario', usuariosRoutes);
    this.app.use('/token', tokenRoutes);
    this.app.use('/fotos', fotoRoutes);
  }
}

export default new App().app;
