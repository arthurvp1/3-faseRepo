//Aula 1
const express = require('express');


const app = express()


app.use(express.json())

let usuarios = [{
    cpf: 12345678901,
    nome: "Karen",
    email: "karen@email.com"
}];


app.post('/Exercicio2', (req, res) => {
const { nome, email  } = req.body;
const usuario = {cpf: Date.now(), nome, email };
usuarios.push(usuario);
res.status(201).json({message: "usuario cadastrado"})
});


app.get('/Exercicio2', (req, res) => {
    res.json(usuarios);
});

app.get('/usuarios/:cpf', (req, res) => {
    const {cpf} = req.params
    const usuario = usuarios.find(c => c.cpf === cpf)
    if (usuario){
        res.json(usuario)
    }
    else{
        res.status(404).send('usuario não encontrado')
        
    }});

    app.get('/usuarios', (req, res) =>{
        res.json(usuarios)
    });


app.put('/usuarios/:cpf', (req, res) => {

    const {cpf} = req.params
    const { nome, email} = req.body;
    const usuario = usuarios.findIndex(c => c.cpf === cpf)

    if(usuario){
        usuario.nome = nome || usuario.nome;
        usuario.email = email || usuario.email;
        res.json({message: "atualizado"})
    }
})

app.delete('/usuarios/:cpf', (req, res) => {
    const { cpf } = req.params
    const index = usuarios.findIndex(c => c.cpf === cpf)
    if(index!== -1){
        usuarios.splice(index, 1)
        res.json({message: "Deletado"})
    }
    else{
        res.status(404).send('usuario não encontrado')
    }
})



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}/Exercicio2`);
});

