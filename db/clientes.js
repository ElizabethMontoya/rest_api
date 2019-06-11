const name = 'clientes'

let schema = {
    id: 'number',
    nombre: 'string',
    apellido: 'string',
    telefono: 'string'
}

// contenido inicial
let data = [
    {
        id: 1,
        nombre: "Elizabeth",
        apellido: "Montoya",
        telefono: '6862885782'
    }
]

module.exports = {
    schema,
    data,
}
