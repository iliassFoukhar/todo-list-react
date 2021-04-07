import React, { Component } from 'react'
import './App.css';
import TodoHeader from './components/TodoHeader.js'
import TodoForm from './components/TodoForm.js'
import TodoList from './components/TodoList.js'
export default class App extends Component {
  state = {
    todos: [{
      id:0,
      text: "Develop a todo list",
      completed: false
    },
    {
      id:1,
      text: "Buy a panini",
      completed: true
    },
    {
      id:2,
      text: "Develop a speed typing test app",
      completed: false
    }],
    remaining : 0
  }

  clicked = (id) => {
    this.setState({ todos:this.state.todos.map(todo=>{
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  };

  delete = (id) => {
    console.log(id);
    this.setState({todos:this.state.todos.filter(todo=>{
      return todo.id !== id;
    })})
  }
  render(){
    const { remaining, todos } = this.state;
    return(
      <div className="App">
        <TodoHeader 
            remaining={remaining}/>
        <TodoForm />
        <TodoList  
            todos={todos} 
            clicked={this.clicked}
            delete={this.delete}/>
            
      </div>  
    );
  }
}

// App.propTypes = {
//   clicked: React.PropTypes.func
// };
