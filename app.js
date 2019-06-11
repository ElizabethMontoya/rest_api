// web framework
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const logger = require('morgan')

// logica para procesar los recursos
const indexRouter = require('./routes/index')
const clientesRouter = require('./routes/clientes')
const todosRouter = require('./routes/todos')

let app = express()
// configuracion de servidor e interpretacion de mensajes del cliente
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

// rutas de los recursos, representa el Nivel 1 de un API REST
app.use('/', indexRouter) // pagina de hola mundo
app.use('/clientes', clientesRouter) // operaciones hacia el recurso de 'usuarios'
app.use('/clientes/:clienteId/todos', (req, res, next) => { // operaciones hacia el recurso de 'tareas' del 'usuario'
    let clienteId = parseInt(req.params.clienteId)
    req.body.clienteId = clienteId
    next()
}, todosRouter)
app.use('/todos', todosRouter) // operaciones hacia el recurso de 'tareas'


module.exports = app
