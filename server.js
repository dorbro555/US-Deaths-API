// server.js

// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("*", function(request, response) {
  response.sendFile(__dirname + '/app/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

// setup sqlite and access database
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./app/sql/death-db',sqlite3.OPEN_READONLY ,(err) => {
  if(err){
    console.error(err);
  }
  console.log('Connected to the Us Deaths Database');
});

let sql = `SELECT * FROM US_Deaths WHERE Quantifier="Deaths Per Year"`;

//close sqlite database
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Closed the database connection.');
});