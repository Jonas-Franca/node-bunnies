const express = require("express")
const path = require("path")

const app = express()

const caminho = path.join(__dirname, 'templates')

app.get('/', (requisicao,resposta) => {
    resposta.send("Estou utilizando nodemon")
})

app.listen(3000,() => {
    console.log("servidor rodando na porta 3000.")
})