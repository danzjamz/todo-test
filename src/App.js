import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Todos from './todos';
import AddTodo from './add-todo';
import GetTodos, { DeleteTodo } from './todoService';
import './index.css';



class App extends Component {
  state = {
    todos: [ ]
  }
  
  componentDidMount() {
    GetTodos()
    .then(res => {
      console.log(res)
      this.setState({ todos: res });
    }).catch(err => {
      console.log('get todos error ->', err)
    });
  }
  
  deleteTodo = (id) => {
    DeleteTodo(id)
    .then(() => {
      this.setState({
        todos: this.state.todos.filter(todo => {
          return todo.id !== id
        })
      });
    }).catch(err => {
      console.log('delete todos error ->', err)
    });
  }
  
  addTodo = (todo) => {
    todo.id = this.state.id;
    this.setState({ id: this.state.id + 1 })
    let todos = [ ...this.state.todos, todo ];
    this.setState({ todos: todos })
  }
  
  render() {
    return (
      <div className="app">
        <h1>Todos</h1>
        <AddTodo className='add-todo' addTodo={ this.addTodo } />
        {/* <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo } /> */}

        { this.state.todos ? (
          this.state.todos.map(todo => {
            return (
              <Todos key={ todo.id } todo={ todo } deleteTodo={ this.deleteTodo } />
              )
            })
            ) : (
              <p className='center'>You have no todos</p>
              )}
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));