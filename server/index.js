var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database/index.js');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/list', function (req, res) {
	console.log(req.body);
	var myTasks = new db.Task ({
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
		console.log(data[data.length-1].task);
		if (err) {
			res.sendStatus(500);
		}
		var todos=[];
		for (var i =0; i<data.length; i++) {
			todos.push({task:data[i].task,dat:data[i].date})
		}
		res.send(todos);
	});
}); 
	
	

app.listen(3000, function() {
  console.log('listening on port 3000');
});

