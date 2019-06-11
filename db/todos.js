const name = 'todos'

let schema = {
    id: 'number',
    clienteId: 'number',
    title: 'string',
    description: 'string'
}

// contenido inicial
let data = [
    {
        id: 1,
        clienteId: 1,
        title: "lunch",
        description: "Go for lunc by 2pm"
    }
]

module.exports = {
    schema,
    data,
}
