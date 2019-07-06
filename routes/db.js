var express = require('express')
var router = express.Router()


// setup sqlite and access database
const sqlite3 = require('sqlite3').verbose();

router.get('/', (req, res) => {
 
  
  res.send('This is a test')

  //close sqlite database
  
})

module.exports = router;