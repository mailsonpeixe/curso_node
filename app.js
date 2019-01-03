const moment = require('moment')
const parser = require('body-parser')
const express = require('express')
const users = require('./controllers/users')

const app = express()
app.use(parser.json())

app.get('/', (request, response) => {
  response.send('API em operação agora')
})

app.post('/users', (request, response) => {
  try {
    response.json(users.createItem(request.body))
  } catch (e) {
    response.send(e.message)
  }

})

app.delete('/users', (req, res) => {
  try {
    users.deleteItem(req.body)
    res.send('Excluido!')
  } catch (e) {
    res.send(e.message)
  }
})

app.get('/users', (request, response) => {
  response.json(users.getAll())
})

app.put('/users', (request, response) => {
  users.updateItem(parseInt(request.body.id))
  response.send("Alterado!")
})

app.get('/users/:id', (request, response) => {
  const user = users.getItem(parseInt(request.params.id))
  response.json(user)
})

app.listen(3000, () => {
  console.log('Api rodando na porta 3000')
})


