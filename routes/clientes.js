const express = require('express');
const router = express.Router();
const clientes = require('../dbs/clientes.json');

/* GET home page. */
router.get('/', (req, res, next) => {

  res.json( clientes );

});

module.exports = router;
