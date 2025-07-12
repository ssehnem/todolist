const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017')

app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})
app.get('/force', async (req, res) => {
    try {
        const result = await TodoModel.create({ task: 'Forçando criação' });
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: 'Erro ao forçar criação' });
    }
})
app.listen(3001, () => {
    console.log('Servidor rodando')
})