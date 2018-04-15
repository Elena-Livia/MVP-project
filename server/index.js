var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database/index.js');

var app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/list', function (req, res) {
	var myTasks = new taskSchema ({
		task: req.body['states[task]'],
		date: req.body['states[date]']
	});

	myTasks.save(function(error,data){
	  if(error){
		 res.status(404);
		}
		 res.status(200).send(data);
	})
});
 


app.get('/list', function (req, res) {
	db.selectAll(function (err,data) {
		if (err) {
			res.sendStatus(500);
		}
		res.send('ok');
	});
}); 
	
	

app.listen(3000, function() {
  console.log('listening on port 3000');
});

