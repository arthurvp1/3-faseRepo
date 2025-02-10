//instalação do express pelo terminal (npm init -y && npm i express)

//chamado do express
const express = require("express");
//criando o app e inserindo o express nele
const app = express();
//crianddo a port
const port = 3000;

//request e resultado do get
app.get("/exercicio1", (req, res) => {
    //envia uma informação
    res.send("Olá Mundo!!!!!!!!!!!!!!!!!");
});

//inicia e 'lê' conexões na port(3000)
app.listen(port, ()=> {
    //exibe uma mensagem ao iniciar codigo
    console.log(`Servidor rodando na porta http://localhost:${port}/exercicio1`);
});