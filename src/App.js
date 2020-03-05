import React, { Component } from 'react';
import Todo from "./Todos";
import AddTodo from "./AddForm";

class App extends Component {
  state = {
    todos: [
      
    ]
  }

  deleteTodo = (id) => {
    console.log(id);
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    })
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
      <h1 className="center blue-text">Todos</h1>
        <AddTodo mainState={this.state} addTodo={this.addTodo}/>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
        
      </div>
    );
  };
};

export default App;
