var express = require('express');
var bodyParser = require('body-parser');

var db = require('../database-mongo/index.js')

var app = express();


app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));

app.get('/items', function (req, res) {
  res.json([
    "item1",
    "item2"    
  ]);
});

app.post('/', function(req,res) {
  var records = new itemSchema ({
    task: req.body.task,
    priority: req.body.priority,
    date: req.body.date,
    status: req.body.status
  });

  records.save().then(task => {
  	res.send ('New task saved to the database')
  }).catch(err => {
  	res.status(400).send('The new task could not be saved')
  });
});

var port = process.env.PORT || 3000;

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

