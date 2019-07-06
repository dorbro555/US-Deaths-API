// server.js

// init project
var express = require('express');
var app = express();
var US_db = require('./routes/db.js');

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get("/db",US_db);

app.get('/test', (req, res) =>{
  res.send('This is a test')
})

// http://expressjs.com/en/starter/basic-routing.html
app.get("*", function(request, response) {
  response.sendFile(__dirname + '/app/index.html');
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

