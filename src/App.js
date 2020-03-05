import React, { Component } from 'react';

import Todos from './todos';
import AddTodo from './add-todo';


class App extends Component {
  state = {
    id: 3,
    todos: [
      { id: 1, content: 'buy some cheetos' },
      { id: 2, content: 'play mario kart' }
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({ todos: todos })
  }

  addTodo = (todo) => {
    todo.id = this.state.id;
    this.setState({ id: this.state.id + 1 })
    let todos = [ ...this.state.todos, todo ];
    this.setState({ todos: todos })
  }

  render() {
    return (
      <div className="App">
        <h1>Todos</h1>
        <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo } />
        <AddTodo addTodo={ this.addTodo } />
      </div>
    );
  }
}

export default App;
