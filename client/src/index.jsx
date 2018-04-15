import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      states:{
        task: "",
        date: ""
      }
    }
   
    this.submit = this.submit.bind(this)
    this.onChange = this.onChange.bind(this)

  }


  onChange(e){
    var states = this.state.states;
    var name = e.target.name;
    var value = e.target.value;
    states[name] = value;
    this.setState({states});
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
    return (
      <div>
       <center>
        <h1>Add a task! :)</h1>
          <p>Task: <input type="text" name="task" placeholder="Write your task here" value={this.state.task}  onChange={this.onChange} /></p><br/>
          <p>Deadline: <input type="text" name="date" placeholder="Enter the date here" value={this.state.date} onChange={this.onChange}/></p><br/>
        <button onClick={this.submit}>Submit</button>
       </center>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));