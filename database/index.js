const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todolist');

var db = mongoose.connection;

db.on('error', function() {
  console.log('connection error');
});

db.once('open', function() {
  console.log('connected successfully');
});

var taskSchema = mongoose.Schema({

  task: String,
  date: String
});

var Task = mongoose.model('Task', repoSchema);



module.exports.Task = Task;