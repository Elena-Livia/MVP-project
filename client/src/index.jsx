import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      task: "",
      date: ""
       
    }
 
    this.submit = this.submit.bind(this)
  }



  submit() {
    $.ajax({
      url: '/tasks', 
      type: 'POST',
      data: this.state,
      success: (data) => {
        console.log("post",data)
        }
    });
  }

   render () {
    return (<div>
  <h1>Add task!</h1>
  <input type="text" task="task" placeholder="Write your task here" value={this.state.task} /><br/>
  <input type="text" date="date" placeholder="Enter the date here" value={this.state.date}/><br/>
  <button onClick={this.submit}>Submit</button>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));