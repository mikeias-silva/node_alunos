import app from './app.js';

const port = 3000;
app.listen(port, () => {
  console.log();
  console.log('estou na porta', port);
});

// require('dotenv').config()
// const express = require("express");
// const app = express();
// const mongoose = require('mongoose');
// const port = process.env.PORT;
// const routes = require("./routes/routes.js")
// console.log("portaaaaaa", port);
// mongoose.connect(process.env.mongoconnect, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Agora conectou");
//     app.emit('pronto');
//   }).catch((error) => {
//     console.log('Erro banco mongo', error);
//   });

// app.use(express.json());
// app.use(routes);

// app.on('pronto', () => {
//   try {
//     app.listen(port, () => {
//       console.log(`Servidor na Porta ${port}`);
//     })

//   } catch (error) {
//     console.log("erro conexao", error);
//   }
// })
