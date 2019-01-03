const users = [{
  'nome': 'Mailson Cardoso Peixe 2',
  'email': 'mailson.peixe@gmail.com',
  'telefone': '12312312',
  'id': 123
}]

const getAll = () => {
  return users
}

const getItem = (id) => {
  const user = users.filter((user) => user.id === id)
  return user
}

const deleteItem = (user) => {

  console.log(user)
  if (!user.id) {
    throw new Error('Impossivel deletar sem ID')
  }
  const index = null
  users.forEach((user, idx) => {
    if (user.id = user.id) {
      this.index = idx
    }
  })
  console.log('index: ', index)
  users.splice(index, 1)
}

const createItem = (user) => {

  console.log(user)
  if (!user.nome) {
    throw new Error('Informe o nome')
  }
  user.id = new Date().getTime()
  users.push(user)
  return user
}

const updateItem = (user) => {
  const index = obterIndex(user.id)
  users[index] = user
}

const obterIndex = (id) => {
  var index = null
  users.forEach((user, idx) => {
    if (user.id = id) {
      index = idx
    }
  })
  return index
}

module.exports = {
  createItem, getAll, getItem, deleteItem, updateItem
}

