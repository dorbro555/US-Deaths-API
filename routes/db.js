var express = require('express')
var router = express.Router()


// setup sqlite and access database
const sqlite3 = require('sqlite3').verbose();

router.get('/', (req, res) => {
  
  let db = new sqlite3.Database('./app/sql/death-db',sqlite3.OPEN_READONLY ,(err) => {
    if(err){
      console.error(err);
    }
    console.log('Connected to the Us Deaths Database');
  });
  
  // perform sqlite query
  let sql = `SELECT * 
             FROM US_Deaths`;
  let quantifier = 'Deaths Per Year'

  db.all(sql,[],(err, rows) => {
    if(err){
      throw(err);
    }
    res.send(rows);
  });
  

  //close sqlite database
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Closed the database connection.');
  });
})

router.get('/:dataset', (req, res) => {
  
  let db = new sqlite3.Database('./app/sql/death-db',sqlite3.OPEN_READONLY ,(err) => {
    if(err){
      console.error(err);
    }
    console.log('Connected to the Us Deaths Database');
  });
  
  // perform sqlite query
  let sql = `SELECT * 
             FROM ${req.params.dataset}`;
  let quantifier = 'Deaths Per Year'
  console.log(req.params.dataset)
  db.all(sql,[],(err, rows) => {
    if(err){
      throw(err);
    }
    res.send(rows);
  });
  

  //close sqlite database
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Closed the database connection.');
  });
})

module.exports = router;