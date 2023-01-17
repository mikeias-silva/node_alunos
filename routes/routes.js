const express = require("express");
const route = express.Router()

route.get('/', (req, res) => {
    res.send("Bem vindo");
    console.log("chegou aqui");
})

route.get('/linkedin', (req, res) => {
    res.send("https://www.linkedin.com/in/mikeias-azevedo-74549bb4/");
})


module.exports = route;