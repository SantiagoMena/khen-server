const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  let clientes = fs.readFileSync(path.join(__dirname, '../dbs/clientes.json'), 'utf8');
  
  res.send( clientes );
});

module.exports = router;
