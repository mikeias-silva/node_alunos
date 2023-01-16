require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT;
const routes = require("./routes/routes.js")

mongoose.connect(process.env.mongoconnect, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Agora conectou");
        app.emit('pronto');
    }).catch((error) => {
        console.log('Erro banco mongo', error);
    });


app.use(express.json());
app.use(routes);

app.on('pronto', () => {
    try {
        app.listen(port, () => {
            console.log(`Servidor na Porta ${port}`);
        })

    } catch (error) {
        console.log("erro conexao", error);
    }
})