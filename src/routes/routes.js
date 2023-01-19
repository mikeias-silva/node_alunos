const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
  res.send('Bem vindo');
  const variable = 1;
  const dois = 2;
  if (true) {
    res.send('entrou');
  }
  console.log('chegou aqui');
});

module.exports = route;
