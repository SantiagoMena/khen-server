const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const { io } = require('../bin/www');

/**
 * Obtener todos los clientes activos
 */
router.get('/', (req, res, next) => {
  let clientes = fs.readFileSync(path.join(__dirname, '../dbs/clientes.json'), 'utf8');
  
  res.send( clientes );
  next();
});

/**
 * Envíar comando al cliente
 */
router.post('/:id', (req, res) => {
  const { id } = req.params;
  const { body: comando } = req;

  req.app.io.to( id ).emit('comando', comando);

  return res.json('ok');
});


module.exports = router;
