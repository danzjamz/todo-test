import React, { Component } from 'react';

import Todos from './todos';


class App extends Component {
  state = {
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

  render() {
    return (
      <div className="App">
        <h1 className='center blue-text'>Todos</h1>
        <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo } />
      </div>
    );
  }
}

export default App;
