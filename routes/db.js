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
             FROM US_Deaths 
             WHERE Quantifier=?`;
  let quantifier = 'Deaths Per Year'

  db.all(sql,[quantifier],(err, rows) => {
    if(err){
      throw(err);
    }
    let stringBuilder = 0;
    rows.forEach((row)=>{
      console.log(stringBuilder)
      stringBuilder++;
      console.log(row)
    });
  res.send('This is a test')
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