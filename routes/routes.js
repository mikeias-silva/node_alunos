const express = require("express");
const route = express.Router()

route.get('/', (req, res) => {
    res.send("Bem vindo");
    console.log("chegou aqui");
})


module.exports = route;