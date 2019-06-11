const express = require('express')
let router = express.Router()
let DB = require('../db/db')

// Operaciones especificas para el recurso de 'tareas'

// GET consultar coleccion de tareas
router.get('/', (req, res, next) => {
    let clienteId = parseInt(req.body.clienteId)
    let todos = DB.select('todos', null, clienteId)
    res.status(200).send(todos)
});

// GET consultar tarea especifico
router.get('/:id', (req, res, next) => {
    let id = parseInt(req.params.id)
    let clienteId = parseInt(req.body.clienteId)
    let todo = DB.select('todos', id, clienteId)
    res.status(200).send(todo)
});

// POST insertar tarea
router.post('/', (req, res, next) => {
    let todo = DB.insert('todos', req.body)
    res.status(200).send(todo)
})

// PUT actualizar tarea
router.put('/:id', (req, res, next) => {
    let id = parseInt(req.params.id)
    let object = Object.assign(req.body, {id: id})
    let todo = DB.update('todos', object)
    res.status(200).send(todo)
})

// DELETE borrar tarea
router.delete('/:id', (req, res, next) => {
    let id = parseInt(req.params.id)
    let todo = DB.remove('todos', id)
    res.status(200).send(todo)
})

module.exports = router
