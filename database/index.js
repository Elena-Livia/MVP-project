const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todolist');

var db = mongoose.connection;

db.on('error', function() {
  console.log('connection error');
});

db.once('open', function() {
  console.log('connected to the database');
});

var taskSchema = mongoose.Schema({
  task: String,
  date: String
});

var Task = mongoose.model('Task', taskSchema);

var selectAll = function(callback) {
  Task.find({}, function(err, tasks) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, tasks);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.Task = Task;