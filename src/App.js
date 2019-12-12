import React, { Component } from 'react';
import Todoitem from './todoitem';
import './App.css';
import './bootstrap.min.css';
import Time from "./date-time";
// import myArray from './array';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: ["Fix bug on line 205", "Erase browser history", "Don't forget your medication"]
    }
  }
  handleSubmit = (e) =>{
    let todo = e.target.previousElementSibling.value;
    if(todo === ""){
      alert("The input field can not be empty!");
    }else{
      let arr = this.state.todos;
      let length = arr.length;
      arr[length++] = todo
      this.setState(()=>({
        todos: this.state.todos
      }), ()=>{
        // console.log(`After update: ${this.state} has been you know na`)
      })   
      e.target.previousElementSibling.value = "";
    }
  }
  deleteAll = () =>{
    this.setState(()=>({ todos: [] }))
  }
  render(){
    console.log(this.state.todos)
      let data = this.state.todos;
      let todoArray = [];
      let i = 0;
      if(data.length > 1){
        for(let datum of data){
          todoArray.push(<Todoitem key={i} todo={datum} />);
          i++;
        }
      }else if(data.length === 1){
        todoArray.push(<Todoitem key={i} todo={data[i]} />);
      }
    return (
      <React.Fragment>
        <div className="row mt-5">
        <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-header">
                <Time/>
              </div>
              <div className="card-body">
                {todoArray}
              </div>
              <div className="card-footer text-muted">
                <input type="text" />
                <input type="button" className="btn btn-info m-1" value="Add" onClick={this.handleSubmit} />
                {(this.state.todos < 1) ? "" : <input type="button" className="btn btn-warning m-1" value="Delete all" onClick={this.deleteAll} />}
              </div>
            </div>
          </div>{/* col-md-8 */}
          <div className="col-md-2"></div>
        </div>{/* row */}
      </React.Fragment>
    );
  }
}

export default App;