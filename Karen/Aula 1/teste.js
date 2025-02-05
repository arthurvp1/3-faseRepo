//Aula 1
const express = require('express');


const app = express()


app.use(express.json())

let carros = [];

app.get('/carros', (req, res) => {
    res.json(carros);
});

app.get('/carros/:placa', (req, res) => {
    const {placa} = req.params
    const carro = carros.find(c => c.placa === placa)
    if (carro){
        res.json(carro)
    }
    else{
        res.status(404).send('Carro não encontrado')
        
    }});

    app.post('/carros', (req, res) => {
    const { placa, marca, modelo, ano } = req.body;
    const carro = {placa, marca, modelo, ano};
    carros.push(carro);
    res.status(201).json({message: "Carro não encontrado"})
});

app.put('/carros/:placa', (req, res) => {

    const {placa} = req.params
    const { marca, modelo, ano } = req.body;
    const carro = carros.findIndex(c => c.placa === placa)

    if(carro){
        carro.marca = marca || carro.marca;
        carro.modelo = modelo || carro.modelo;
        carro.ano = ano || carro.ano;
        res.json({message: "atualizado"})
    }
})

app.delete('/carros/:placa', (req, res) => {
    const { placa } = req.params
    const index = carros.findIndex(c => c.placa === placa)
    if(index!== -1){
        carros.splice(index, 1)
        res.json({message: "Deletado"})
    }
    else{
        res.status(404).send('Carro não encontrado')
    }
})



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

