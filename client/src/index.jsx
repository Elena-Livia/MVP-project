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
      },
      data: ""
    }
    this.submit = this.submit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.get = this.get.bind(this)
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
      url: '/list', 
      type: 'POST',
      data: this.state,
      success: (data) => {
        console.log("post",data);
        }
    });
  }

  get() {
    $.ajax({
      url: '/list', 
      type: 'GET',
      data: this.state,
      success: (data) => {
        this.setState({data: data});
        }
    });
  }

   render () {
    if (this.state.data !== "") {
      return ( 
        <div> <center>{ this.state.data.map((item) =>
         <div> {item.task} </div>
       )} 
        </center></div>)
    } else {
      return (
      <div>
       <center>
        <h1>Add a task!</h1>
          <p>Task: <input type = "text" name = "task" placeholder = "Write your task here" value = {this.state.task}  onChange = {this.onChange} /></p>
          <br/>
          <p>Date: <input type = "text" name = "date" placeholder = "Enter the date here" value = {this.state.date} onChange = {this.onChange}/></p>
          <br/>
        <button onClick = {this.submit}>Submit</button>
        <h3>Press <a onClick = {this.get} href = "#">here</a> to see your list</h3>
       </center>
      </div>)
   }
 }   
}

ReactDOM.render(<App />, document.getElementById('app'));