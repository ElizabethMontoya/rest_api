const express = require('express');
let router = express.Router();
let DB = require('../db/db')

// Operaciones especificas para el recurso de 'usuarios'

// GET consultar coleccion de usuarios
router.get('/', (req, res, next) => {
  res.status(200).send(cliente)
});

// GET consultar usuario especifico
router.get('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  res.status(200).send(cliente)
});

// POST insertar usuario
router.post('/', (req, res, next) => {
  let cliente = DB.insert('clientes', req.body)
  res.status(200).send(cliente)
})

// PUT actualizar usuario
router.put('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let object = Object.assign(req.body, {id: id})
  let cliente = DB.update('clientes', object)
  res.status(200).send(cliente)
})

// DELETE borrar usuario
router.delete('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let cliente = DB.remove('clientes', id)
  res.status(200).send(cliente)
})

module.exports = router;
