// server.js

// init project
var express = require('express');
var app = express();
var US_db = require('./routes/db.js');

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.use("/db",US_db);

app.get('/routes', (req, res) => {
  const routes ={
    1:'db/US_Deaths',
    2:'db/Breakdown_Overview',
    3:'db/Breakdown_Race',
    4:'db/Breakdown_Age',
    5:'db/State_and_USPop_Overview',
    6:'db/State_and_USPop_Breakdown',
    7:'db/State_and_USPop_Race',
    8:'db/Firearm_Breakdown',
  }
  
  res.send(routes)
})

// http://expressjs.com/en/starter/basic-routing.html
app.get("*", function(request, response) {
  response.sendFile(__dirname + '/app/index.html');
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

