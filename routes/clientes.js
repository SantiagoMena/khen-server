const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  let dbUri = path.join(__dirname, '../dbs/clientes.json');

  if( !fs.existsSync( dbUri ) ) {
    return res.json([]);
  }

  let clientes = fs.readFileSync( dbUri, 'utf8');
  
  res.send( clientes );
});

module.exports = router;
